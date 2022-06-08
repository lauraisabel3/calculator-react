import styled from "@emotion/styled";

const Container = styled.div `
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grayish-cyan);
`

const Title = styled.h1 `
  text-align: center;
  font-size: 2rem;
  letter-spacing: 0.8rem;
  color: var(--very-dark-cyan);
`

export { Container, Title }