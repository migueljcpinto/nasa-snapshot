import { useState } from "react";

type PhotoExplanationProps = {
  explanation: string;
};

export const PhotoExplanation = ({ explanation }: PhotoExplanationProps) => {
  const [showFullExplanation, setShowFullExplanation] = useState(false);

  return (
    <div className="flex flex-col items-center mt-4">
      <p className={`text-xs ${showFullExplanation ? "" : "line-clamp-5"}`}>
        {explanation}
      </p>

      <p
        className="mt-2 cursor-pointer text-sm underline"
        onClick={() => setShowFullExplanation((prev) => !prev)}
      >
        {showFullExplanation ? "See less" : "See more"}
      </p>
    </div>
  );
};
