import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table { 
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      text-align: left;
    } 

    th,td {
      padding: 1rem 2rem;

      font-size: 1rem;
      font-weight: 400;
      color: var(--text-body);
    }

    td {
      background: var(--shape);

      &:first-child {
        border-top-left-radius: 0.4rem; 
        border-bottom-left-radius: 0.4rem;

        color: var(--text-title);
      } 

      &:last-child {
        border-bottom-right-radius: 0.4rem; 
        border-top-right-radius: 0.4rem; 
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`