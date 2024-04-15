import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Highlight } from "../../components/Highlight";
import { DefinitionBox } from "../../components/DefinitionBox";
import { fetchElementsBySymbols } from "../../app/fetchElementsBySymbolsSlice";
import {
  HomeContainer,
  Button,
  Input,
  Title,
  InputGroup,
  Label,
  InputsContainer,
  StyledText,
} from "./styles";
import { loadElements } from "../../app/elementsSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const [shouldHighlight, setShouldHighlight] = useState(false);
  const [highlightedData, setHighlightedData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const elements = useSelector(
    (state: RootState) => state.fetchElementsBySymbols.list
  );

  useEffect(() => {
    dispatch(loadElements());
  }, [dispatch]);

  useEffect(() => {
    if (highlightedData.length > 0) {
      setIsLoading(true);
      dispatch(fetchElementsBySymbols(highlightedData))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
      setHighlightedData([]);
      setIsSubmitted(true);
    }
  }, [dispatch, highlightedData]);

  const handleInputChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      setShouldHighlight(false);
    };

  const handleFetchDetails = () => {
    if (!shouldHighlight) {
      setShouldHighlight(true);
    }
  };

  const handleHighlights = useCallback((highlighted: string[]) => {
    setHighlightedData((prev) => [...new Set([...prev, ...highlighted])]);
  }, []);

  const isButtonDisabled =
    formData.firstName.trim() === "" || formData.lastName.trim() === "";

  const renderTextOrHighlight = (
    text: string,
    onHighlighted: (highlighted: string[]) => void
  ) => {
    return shouldHighlight ? (
      <Highlight text={text} onHighlighted={onHighlighted} />
    ) : (
      text
    );
  };

  return (
    <HomeContainer>
      <Title>
        <StyledText>
          {renderTextOrHighlight(formData.firstName, handleHighlights)}
        </StyledText>
        <StyledText>
          {renderTextOrHighlight(formData.lastName, handleHighlights)}
        </StyledText>
      </Title>
      <InputsContainer>
        <InputGroup>
          <Label htmlFor="Nome">Nome</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange("firstName")}
            maxLength={50}
            placeholder="Digite seu nome"
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="Sobrenome">Sobrenome</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange("lastName")}
            maxLength={50}
            placeholder="Digite seu sobrenome"
            required
          />
        </InputGroup>
      </InputsContainer>
      <Button onClick={handleFetchDetails} disabled={isButtonDisabled}>
        {isLoading ? "Loading..." : "Breakify"}
      </Button>
      <DefinitionBox
        results={elements}
        infoMessage={
          !isSubmitted &&
          `Instruções para o Uso da Aplicação:\nBem-vindo:\n Descubra quais elementos químicos estão presentes em seu nome e sobrenome de forma divertida e educativa, inspirada pela série "Breaking Bad".\nComo Usar:\nPreenchimento dos Campos:\nNome e Sobrenome - Insira seu nome no primeiro campo e seu sobrenome no segundo.\nAtivação do Botão:\nO botão "Breakify" será habilitado quando ambos os campos estiverem preenchidos.\nInteratividade com o Botão Breakify:\nClique em "Breakify" para processar seu nome e sobrenome. Os elementos da tabela periódica em seu nome serão destacados.\nExibição dos Resultados:\nUma caixa de mensagem exibirá explicações sobre cada elemento químico destacado em seu nome.`
        }
      />
    </HomeContainer>
  );
};

export default Home;
