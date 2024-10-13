import { useMemo } from "react";

export const useModalText = (text: string[]) =>
  useMemo(
    () =>
      text.map((line) => (
        <p
          key={line}
          className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
        >
          {line}
        </p>
      )),
    [text]
  );
