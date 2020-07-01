import styled from "styled-components";
import counter from "../reducers/counter";
import { useDispatch } from "react-redux";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Button = styled.button``;

const Counter = styled.div``;

export default function Home() {
  const dispatch = useDispatch();
  const { value } = counter.getState();
  return (
    <>
      <Title>next.js with styled-comopnents and redux-toolkit</Title>
      <Button
        onClick={() => {
          dispatch(counter.actions.increment());
        }}
      >
        increment
      </Button>
      <Counter>{value}</Counter>
    </>
  );
}
