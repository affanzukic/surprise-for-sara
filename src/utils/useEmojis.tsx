import { useMemo } from "react";

export const useEmojis = () =>
  useMemo(
    () =>
      [...new Array(1000).keys()].map((_i, key) => (
        <div key={key} className="opacity-50 saturate-[0.8]">
          🎀
        </div>
      )),
    []
  );
