import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4rem;

  div { 
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    background: var(--shape);

    font-size: 1rem;
    color: var(--text-title);

    transition: all 1s;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block; 
      margin-top: 0.75rem;

      font-size: 2rem;
      font-weight: 500;
    }

    &.highlight {
      background: var(--green);
      color: #ffffff;
    }

    &.debt-highlight {
      background: var(--red);
    }
  }
`