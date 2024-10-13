import { Updock } from "next/font/google";
import { useRouter } from "next/navigation";
import { memo, useMemo, useState } from "react";

import { QuizQuestion } from "@/components/QuizQuestion";
import { useQuiz } from "@/utils";
import { TQuizOption } from "@/utils/useQuiz";

const updock = Updock({ subsets: ["latin"], weight: "400" });

const Quiz = memo(() => {
  const router = useRouter();
  const [canContinue, setCanContinue] = useState(true);
  const {
    currentQuestion,
    getNextQuestion,
    renderCorrectFirst,
    shouldRedirect,
  } = useQuiz();

  const CorrectQuestion = useMemo(
    () => (
      <QuizQuestion
        question={currentQuestion?.correct ?? ({} as TQuizOption)}
        getNextQuestion={getNextQuestion}
        canContinue={canContinue}
        setCanContinue={setCanContinue}
        correct
      />
    ),
    [canContinue, currentQuestion?.correct, getNextQuestion]
  );
  const IncorrectQuestion = useMemo(
    () => (
      <QuizQuestion
        question={currentQuestion?.incorrect ?? ({} as TQuizOption)}
        getNextQuestion={getNextQuestion}
        canContinue={canContinue}
        setCanContinue={setCanContinue}
        correct={false}
      />
    ),
    [canContinue, currentQuestion?.incorrect, getNextQuestion]
  );

  if (shouldRedirect) {
    router.push("/congrats");
    return null;
  }

  return (
    <div className="flex flex-col justify-center gap-16 align-middle">
      <h1 className={`text-center text-8xl font-black ${updock.className}`}>
        {currentQuestion?.title}
      </h1>
      <div className="flex flex-row justify-center gap-64 align-middle">
        {renderCorrectFirst ? (
          <>
            {CorrectQuestion}
            {IncorrectQuestion}
          </>
        ) : (
          <>
            {IncorrectQuestion}
            {CorrectQuestion}
          </>
        )}
      </div>
    </div>
  );
});

export default Quiz;
