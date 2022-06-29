/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useEffect, useState } from "react";
import { Container, ItemsContainer, InputContainer, IconInput, InputBill, TipsContainer, Tip, TipCustom, InputPeople, TotalContainer, TotalTitle, TotalAmount, Button } from './styles'
import iconDollar from '../../assets/icon-dollar.svg'
import iconPerson from '../../assets/icon-person.svg'

const Main = () => {

  const [bill,setBill] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [total, setTotal] = useState(0)

 
  
  const handleClick = () => {
    let totalTip;

    if(tip <= 50) {
      totalTip = ((parseFloat(bill) * parseFloat(tip) / 100));
      console.log(totalTip)
      setTipPerPerson((parseFloat(totalTip) / numberPeople));
      console.log(tipPerPerson)
      setTotal(((parseFloat(bill) + parseFloat(totalTip))));
    } else {
      totalTip = tip;
      setTipPerPerson((totalTip / numberPeople));
      setTotal((parseFloat(bill) + parseFloat(totalTip)))
    }
      }
  return (
    <Container>
      <ItemsContainer>
        <h3>Bill</h3>
        <InputContainer>
          <IconInput
            css={css`
              background-image: url(${iconDollar});
            `}
          />
          <InputBill 
            onChange={e => setBill((e.target.value))}
          />
        </InputContainer>
      </ItemsContainer>
      <ItemsContainer>
        <h3>Select Tip %</h3>
        <TipsContainer>
          <Tip
          value={5}
          onClick={(e) =>setTip(e.target.getAttribute('value'))}
          >
            5%
          </Tip>
          <Tip
            value={10}
            onClick={(e) =>setTip(e.target.getAttribute('value'))}
          >
            10%
          </Tip>
          <Tip
            value={15}
            onClick={(e) =>setTip(e.target.getAttribute('value'))}
          >
            15%
          </Tip>
          <Tip
            value={25}
            onClick={(e) =>setTip(e.target.getAttribute('value'))}
          >
            25%
          </Tip>
          <Tip
            value={50}
            onClick={(e) =>setTip(e.target.getAttribute('value'))}
          >
            50%
          </Tip>
          <TipCustom
            placeholder="Custom"
            onChange={e => setTip(e.target.value)}
          />
        </TipsContainer>
      </ItemsContainer>
      <ItemsContainer>
        <h3>Number of People</h3>
        <InputContainer>
          <IconInput
            css={css`
              background-image: url(${iconPerson});
            `}
          />
          <InputPeople
            onChange={e => setNumberPeople(e.target.value)}
          />
        </InputContainer>
      </ItemsContainer>
      <TotalContainer>
        <TotalTitle>Tip Amount <br/><span>/ person</span></TotalTitle>
        <TotalAmount>{tipPerPerson}</TotalAmount>
        <TotalTitle>Total <br/><span>/ with amount</span></TotalTitle>
        <TotalAmount>{total}</TotalAmount>
        <Button onClick={handleClick}>RESET</Button>
      </TotalContainer>
    </Container>
  )
}

export default Main
