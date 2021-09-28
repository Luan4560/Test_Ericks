import styled from 'styled-components'

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid #ccc;
  padding: 1.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .name {
    color: #0E86D4;
    font-weight: bold;
    text-align: left;
  }

  .price {
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media(max-width: 768px) {
    margin: 1rem ;
  }
`
