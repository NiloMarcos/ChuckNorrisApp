import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
  background-color: #C4DBE0;
`;

export const Title = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: #343a40;
`;

export const Container = styled.View`
  flex: 1;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  background-color: #495057;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 8px;
`;

export const ButtonSubmitText = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
`;

export const ContainerSearch = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const TextSearch = styled.Text`
  font-size: 16px;
`;

export const ContainerResponseApi = styled.View`
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 25px;
  height: 200px;
  border-radius: 10px;
  background-color: #adb5bd;
`;

export const ImageApi = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 45%;
  margin-bottom: 15px;
`;

export const TextApi = styled.Text`
  font-size: 16px;
`;