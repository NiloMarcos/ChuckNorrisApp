import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import Header from "../../components/Header";
import api from "../../services/api";
import {
  ContainerAll,
  Title,
  Container,
  ButtonSubmit,
  ButtonSubmitText,
  ContainerSearch,
  TextSearch,
  ContainerResponseApi,
  ImageApi,
  TextApi
} from "./styles";

export default function Home() {
  const [chuckTyping, setChuckTyping] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const response = await api.get("/jokes/random");
    setChuckTyping(response.data);
    console.log(response.data);
    setLoading(false);
  }

  return (
    <ContainerAll>
      <Header />
      <Title>Bem vindo(a) ao Chuck Norris App</Title>

      <Container>
        <ContainerSearch>
          <TextSearch>Vamos buscar as perola do Chuck 😉</TextSearch>
          <ButtonSubmit onPress={() => handleSubmit()}>
            {loading ? (
              <ActivityIndicator size={20} color="#ff0" />
            ) : (
              <ButtonSubmitText>Buscar</ButtonSubmitText>
            )}
          </ButtonSubmit>
        </ContainerSearch>

        <ContainerResponseApi>
          <ImageApi source={{ uri: chuckTyping.icon_url}} />
          <TextApi>{chuckTyping.value}</TextApi>
        </ContainerResponseApi>

      </Container>
    </ContainerAll>
  );
}
