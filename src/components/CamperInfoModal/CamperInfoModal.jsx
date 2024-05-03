import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import {
  Backdrop,
  ButtonClose,
  CloseIcon,
  Container,
  NameCamper,
} from "./CamperInfoModalstyled";
import icons from "../../img/sprite.svg";

const modalRoot = document.querySelector("#modal");

const CamperInfoModal = ({ onClose, adverd }) => {
  useLockBodyScroll(true);

  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscPress);

    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClick}>
      <div>
        <Container>
          <ButtonClose type="button" onClick={onClose} aria-label="Close">
            <CloseIcon>
              <use href={`${icons}#icon-cross`}></use>
            </CloseIcon>
          </ButtonClose>
          <NameCamper>{adverd.name}</NameCamper>
        </Container>
      </div>
    </Backdrop>,
    modalRoot,
  );
};

export default CamperInfoModal;
