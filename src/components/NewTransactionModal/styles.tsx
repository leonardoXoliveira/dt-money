import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1.25rem 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: #e7e9ee;

    font-size: 1rem;
    color: var(--text-title);

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 1.25rem 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--green);

    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red"
}

const activeColors = {
  green: "#33CC95",
  red: "#e52e40"
}

const darkenBorderColor = darken(0.2, "#969cb3");

export const RadioBox = styled.label<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.25rem;
  border: ${({ isActive }) => isActive ? `1.5px solid ${darkenBorderColor}` : "1.5px solid #969cb3"};
  border-radius: 0.25rem;
  cursor: pointer;
  background: ${({ isActive, activeColor }) => isActive ? transparentize(0.8, activeColors[activeColor]) : "transparent"};

  &:hover {
    border-color: ${darkenBorderColor};
  }

  input[type="radio"] {
    display: none;
  }

  img {
    margin-right: 1rem;
  }
` 