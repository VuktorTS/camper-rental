import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);
  overflow-y: auto;
  z-index: 2;
`;

export const Container = styled.div`
  display: inline-block;
  width: 982px;
  margin: 40px 0;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 35px;
  right: 35px;
  padding: 0;
  line-height: 0.6;
  color: var(--color-main);
  border: none;
  background: none;
  cursor: pointer;
`;
export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--color-main);
`;
export const NameCamper = styled.h2``;
