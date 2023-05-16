import styled from 'styled-components'

export const ShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    margin-bottom: 0.975rem;
  }
`

export const ShopInfoBox = styled.div`
  width: 90vw;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 1440px) {
    padding: 2.5rem;
    width: 28rem;
  }
`

export const ShopCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > span {
    width: 100%;
    height: 0.02rem;
    background-color: ${(props) => props.theme['base-button']};
  }
`

export const ShopInfoTextContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};

    > p {
      font-size: 0.875rem;
    }

    > span {
      font-size: 0.875rem;
    }

    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`

export const ConfirmButton = styled.button`
  margin-top: 1.5rem;
  cursor: pointer;
  display: flex;
  background-color: ${(props) => props.theme['yellow-medium']};
  padding: 0.875rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  transition: 300ms;

  p {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme['base-white']};
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`