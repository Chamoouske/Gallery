import styled from 'styled-components';

export const HomePage = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BoxPicture = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: row;
  flex-warp: warp;
`;

export const Result = styled.div`
  margin: 2rem;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-areas:
    'button'
    'boxselect'
    'content';
  justify-items: center;
`;

export const AddImage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  width: 20rem;
  border: none;
  outline: none;
  font-size: 1.35rem;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #55077a;
  color: white;
  padding: 1.2rem;
  margin: 1rem;
  cursor: pointer;
  border-radius: 5px;
  grid-area: button;
`;

export const BoxSelect = styled.select`
  margin: 0.5rem;
  font-size: 1.35rem;
  grid-area: boxselect;
`;

export const Options = styled.option`
justify-content: center;
font-size: 1rem;
`;