import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { setElements } from "../../app/highlightedElementsSlice";
import { TitleHighlight } from "./styles";

interface HighlightElementsProps {
  text: string;
  onHighlighted: (highlighted: string[]) => void;
}

export const Highlight: React.FC<HighlightElementsProps> = ({
  text,
  onHighlighted,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const elements = useSelector((state: RootState) => state.elements.list);

  const [highlightedParts, setHighlightedParts] = useState<string[]>([]);

  const parts = text
    .split(new RegExp(`(${elements.join("|")})`, "g"))
    .map((part: any, index) => {
      if (elements.includes(part)) {
        return (
          <TitleHighlight key={index} className="highlight-box">
            {part}
          </TitleHighlight>
        );
      }
      return part;
    });

  useEffect(() => {
    const newHighlightedParts = text
      .split(new RegExp(`(${elements.join("|")})`, "g"))
      .filter((part: any) => elements.includes(part));

    if (newHighlightedParts.length > 0) {
      setHighlightedParts(newHighlightedParts);
      onHighlighted(newHighlightedParts);
    }
  }, [text, elements, onHighlighted]);

  useEffect(() => {
    if (highlightedParts.length > 0) {
      dispatch(setElements(highlightedParts));
    }
  }, [dispatch, highlightedParts]);

  return <>{parts}</>;
};
