import { Modal } from "flowbite-react";
import Image from "next/image";
import { Dispatch, memo, SetStateAction, useCallback, useState } from "react";

import kanyeFace from "@/assets/kanye_face.jpg";
import { TQuizOption } from "@/utils/useQuiz";

type TQuizQuestion = {
  question: TQuizOption;
  correct?: boolean;
  getNextQuestion: () => void;
  canContinue: boolean;
  setCanContinue: Dispatch<SetStateAction<boolean>>;
};

export const QuizQuestion = memo<TQuizQuestion>(
  ({ question, correct, getNextQuestion, canContinue, setCanContinue }) => {
    const [background, setBackground] = useState<
      "modalBg" | "correct" | "incorrect"
    >("modalBg");
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const nextQuestion = useCallback(() => {
      setCanContinue(true);
      setBackground("modalBg");
      if (correct) {
        getNextQuestion();
      }
    }, [correct, getNextQuestion, setCanContinue]);

    const handleClick = useCallback(() => {
      if (canContinue) {
        setBackground(correct ? "correct" : "incorrect");
        setCanContinue(false);

        if (!correct) {
          setTimeout(() => setShowModal(true), 1000);
        }

        setTimeout(nextQuestion, 2000);
      }
    }, [canContinue, correct, setCanContinue, nextQuestion]);

    return (
      <>
        {/* eslint-disable-next-line */}
            <div
          style={{ backgroundColor: `var(--${background})` }}
          className="flex size-80 cursor-pointer flex-col justify-center gap-4 rounded align-middle transition"
          onClick={handleClick}
        >
          <Image
            src={question.image as unknown as string}
            alt="image"
            width={200}
            height={200}
            className="flex max-h-96 max-w-96 self-center"
          />
          <p className="text-semibold px-4 text-center text-xl">
            {question.description}
          </p>
        </div>
        <Modal show={showModal} onClose={handleCloseModal}>
          <Modal.Header>...</Modal.Header>
          <Modal.Body className="flex justify-center align-middle">
            <Image
              src={kanyeFace as unknown as string}
              alt="kanye"
              className="flex self-center"
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
);
