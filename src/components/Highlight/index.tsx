import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TitleHighlight } from "./styles";

interface HighlightElementsProps {
  text: string;
}

export const Highlight: React.FC<HighlightElementsProps> = ({ text }) => {
  const elements = useSelector((state: RootState) => state.elements.list);

  const highlightText = (text: string): React.ReactNode => {
    const regex = new RegExp(`(${elements.join("|")})`, "g");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (elements.includes(part)) {
        return <TitleHighlight key={index}>{part}</TitleHighlight>;
      }
      return part;
    }, [] as React.ReactNode[]);
  };

  const parts = highlightText(text);

  return <>{parts}</>;
};
