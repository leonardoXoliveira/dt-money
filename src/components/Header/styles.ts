import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2rem 1.5rem 8rem;

  button {
    padding: 0.75rem 2rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--blue-light);

    font-size: 1rem;
    color: #ffffff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`