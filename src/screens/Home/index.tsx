import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Highlight } from "../../components/Highlight";
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
import { loadElements } from "../../redux/elementsSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadElements());
  }, [dispatch]);

  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const [shouldHighlight, setShouldHighlight] = useState(false);

  const handleInputChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      setShouldHighlight(false);
    };

  const handleFetchDetails = () => {
    setShouldHighlight(true);
  };

  return (
    <HomeContainer>
      <Title>
        <StyledText>
          {shouldHighlight ? (
            <Highlight text={formData.firstName} />
          ) : (
            formData.firstName
          )}
        </StyledText>
        <StyledText>
          {shouldHighlight ? (
            <Highlight text={formData.lastName} />
          ) : (
            formData.lastName
          )}
        </StyledText>
      </Title>
      <InputsContainer>
        <InputGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange("firstName")}
            maxLength={50}
            placeholder="Enter your first name"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange("lastName")}
            maxLength={50}
            placeholder="Enter your Last name"
          />
        </InputGroup>
      </InputsContainer>
      <Button onClick={handleFetchDetails}>Breakify</Button>
    </HomeContainer>
  );
};

export default Home;
