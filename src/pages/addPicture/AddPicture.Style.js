import styled from 'styled-components';

export const AddPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BackgroundAdd = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormAdd = styled.div`
  width: 25%;
  height: 70%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: white;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  padding: 2rem;
  box-sizing: border-box;
  max-height: 30rem;
  max-width: 50rem;
  min-width: 10rem;
  min-height: 5rem;
`;

export const AddTitle = styled.h1`
  font-size: 2.5rem;
  color: #55077a;
  margin: 0rem;
`;

export const InputFieldAdd = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  text-align: center;
  border-bottom: 2px solid #340742;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  height: 2rem;
  border: none;
  outline: none;
  font-size: 1.35rem;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #55077a;
  color: white;
  padding: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
`;
