import React from "react";
import {
  BoxContainer,
  SymbolHeader,
  DefinitionText,
  InfoText,
  Title,
  Content,
} from "./styles";

interface ElementDefinition {
  symbol: string;
  definition: string[];
}

interface DefinitionBoxProps {
  results: ElementDefinition[];
  infoMessage?: any;
}

export const DefinitionBox: React.FC<DefinitionBoxProps> = ({
  results,
  infoMessage,
}) => {
  const formattedInfo = infoMessage
    ? infoMessage.split("\n").map((line: string, index: number) => {
        if (line.includes(":")) {
          return (
            <div key={index}>
              <Title>{line}</Title>
            </div>
          );
        }
        return <Content key={index}>{line}</Content>;
      })
    : null;

  return (
    <BoxContainer className="definition-box">
      {results.length > 0 ? (
        results.map((item, index) => (
          <div key={index}>
            <SymbolHeader>{item.symbol}</SymbolHeader>
            {item.definition.map((def, i) => (
              <DefinitionText key={i}>{def}</DefinitionText>
            ))}
          </div>
        ))
      ) : (
        <InfoText>{formattedInfo || "Buscando elementos..."}</InfoText>
      )}
    </BoxContainer>
  );
};
