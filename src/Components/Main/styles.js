import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin-top: -16px;
  padding: 20px;
  background-color: var(--white);
  border-radius: 20px 20px 0 0;
  overflow: hidden;

  ${bp.desktop} {
    height: 500px;
    margin: 0 auto;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px 80px;
    border-radius: 20px;
  }
`

const ItemsContainer = styled.div `
  width: 100%;
  height: auto;
  position: relative;
  margin: 0 0 20px 0;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--dark-cyan);
  }

  ${bp.desktop} {
    margin: 0;
    grid-column: 1;
  }
`

const InputContainer = styled.div `
  width: 100%;
  height: auto;
  margin-top: 12px;
  display: flex;
  align-items: center;
`

const IconInput = styled.span`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 4px;
  display: flex;
  background-position: center;
  background-size: coNTAIN;
  background-repeat: no-repeat;
`

const InputBill = styled.input `
  width: 100%;
  height: 48px;
  padding: 32px;
  display:flex;
  background-color: var(--light-cyan);
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  font-weight: 700;
  color: var(--very-dark-cyan);
  cursor: pointer;

  :focus {
    outline: 2px solid var(--strong-cyan);
  }
`

const TipsContainer = styled.div `
  width: 100%;
  height: auto;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  ${bp.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px
    grid-column: 1;
  }
`

const Tip = styled.div `
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--very-dark-cyan);
  border-radius: 4px;
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;

  :hover {
    transform: scale(1.02);
    background-color: var(--strong-cyan);
  }
`

const TipCustom = styled.input `
  width: 100%;
  height: 48px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-cyan);
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  font-weight: 700;
  color: var(--very-dark-cyan);
  cursor: pointer;

  ::placeholder {
    text-align: center;
    color: var(--dark-cyan);
  }

  :focus {
    outline: 2px solid var(--strong-cyan);
  }

  :hover {
    transform: scale(1.02);
  }
`

const InputPeople = styled(InputBill) ``

const TotalContainer = styled.div `
  width: 100%;
  height: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  align-items: center;
  background-color: var(--very-dark-cyan);
  border-radius: 12px;

  ${bp.desktop} {
    height: 100%;
    grid-template-rows: repeat(4, 1fr);
    grid-column: 2/3;
    grid-row: 1/4;
    padding: 40px 60px;
  }
`

const TotalTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--white);

  span {
    font-weight: 400;
    color: var(--dark-cyan);
  }

  ${bp.desktop} {
    font-size: 1.8rem;
  }
`

const TotalAmount = styled.span `
  text-align: right;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--strong-cyan);

  ${bp.desktop} {
    font-size: 4rem;
  }
`

const Button = styled.button `
  width: 100%;
  height: 48px;
  margin-top: 12px;
  grid-column: 1/3;
  background-color: var(--strong-cyan);
  border-radius: 8px;
  border: none;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;

  ${bp.desktop} {
    grid-row: 4/5;
  }

  :hover {
    transform: scale(1.02);
  }
`

export { Container, ItemsContainer, InputContainer, IconInput, InputBill, TipsContainer, Tip, TipCustom, InputPeople, TotalContainer, TotalTitle, TotalAmount, Button }


