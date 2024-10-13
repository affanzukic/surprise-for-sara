import { useCallback, useMemo, useState } from "react";

import q1f from "@/assets/questions/q1-f.jpeg";
import q1t from "@/assets/questions/q1-t.jpg";
import q2f from "@/assets/questions/q2-f.png";
import q2t from "@/assets/questions/q2-t.png";
import q3f from "@/assets/questions/q3-f.png";
import q3t from "@/assets/questions/q3-t.jpeg";
import q4f from "@/assets/questions/q4-f.jpg";
import q4t from "@/assets/questions/q4-t.png";
import q5f from "@/assets/questions/q5-f.jpg";
import q5t from "@/assets/questions/q5-t.png";
import q6f from "@/assets/questions/q6-f.jpg";
import q6t from "@/assets/questions/q6-t.png";
import q7f from "@/assets/questions/q7-f.jpg";
import q7t from "@/assets/questions/q7-t.jpg";

export type TQuizOption = {
  image: unknown;
  description: string;
};

export type TQuiz = {
  title: string;
  correct: TQuizOption;
  incorrect: TQuizOption;
};

const Quiz: TQuiz[] = [
  {
    title: "Do you like me?",
    correct: {
      image: q1t,
      description: "YES!!!",
    },
    incorrect: {
      image: q1f,
      description: "no fuk u :(",
    },
  },
  {
    title: "Are you sure you like me?",
    correct: {
      image: q2t,
      description: "da afane sigurna sam",
    },
    incorrect: {
      image: q2f,
      description: "sta ti je budalo, znas li ti ko sam ja???",
    },
  },
  {
    title: "Siljis li?",
    correct: {
      image: q3t,
      description: "da, hajmo zapaliti",
    },
    incorrect: {
      image: q3f,
      description: "ne, ja nisam nikad trave dotakla u zivotu",
    },
  },
  {
    title: "Da li si...?",
    correct: {
      image: q4t,
      description: "My princess",
    },
    incorrect: {
      image: q4f,
      description: "My queen",
    },
  },
  {
    title: "Would I still like you if you turned into a worm?",
    correct: {
      image: q5t,
      description: "i'd carry you around in my pocket",
    },
    incorrect: {
      image: q5f,
      description:
        "no (highly unlikely, i don't even know if this should be an option tbh)",
    },
  },
  {
    title: "Koji si mi caj napravila onu noc?",
    correct: {
      image: q6t,
      description: "Earl Grey",
    },
    incorrect: {
      image: q6f,
      description: "Kamilica",
    },
  },
  {
    title: "Sexy time???",
    correct: {
      image: q7t,
      description: "I LIKE!",
    },
    incorrect: {
      image: q7f,
      description: "boli me glava",
    },
  },
];

export const useQuiz = () => {
  const [question, setQuestion] = useState(0);
  const [renderCorrectFirst, setRenderCorrectFirst] = useState(false);
  const currentQuestion = useMemo(
    () => Quiz[question] as Partial<TQuiz>,
    [question]
  );
  const shouldRedirect = question === Quiz.length;

  const getRandomBoolean = useCallback(() => Math.random() < 0.5, []);

  const getNextQuestion = useCallback(() => {
    setQuestion((prevValue) => prevValue + 1);
    setRenderCorrectFirst(getRandomBoolean());
  }, [getRandomBoolean]);

  return {
    renderCorrectFirst,
    currentQuestion,
    getNextQuestion,
    shouldRedirect,
  };
};
