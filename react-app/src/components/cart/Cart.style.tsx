import styled from "styled-components";

export const CartBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  opacity: 1;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000000;
  overflow: hidden;
`

export const CartContainer = styled.div`
  position: absolute;
  height: 100%;
  background: white;
  width: 25%;
  right: 0;
  transition: .2s;
  padding: 1rem;
  text-align: start;
`

export const CartTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

export const CartClear = styled.div`
  text-align: end;
  cursor: pointer;
  transition: .2s;
  
  &:hover {
    opacity: 0.75;
  }
`

export const CartContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 85%;
  overflow-x: hidden;
  
  &::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,.15);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track{
    background: transparent;
  }
`

export const CartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 100%;
`

export const CartButton = styled.button`
  font-size: 1.25rem;
  padding: 1rem 5rem 1rem 5rem;
  background: darkorange;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: .2s;
  
  &:hover {
    opacity: 0.8;
  }
`
