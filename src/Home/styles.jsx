import styled from 'styled-components'

export const GridCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.75rem;

  @media(max-width: 425px) {
    flex-direction: column; 
  }

 `