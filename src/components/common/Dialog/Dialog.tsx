import styled from '@emotion/styled';
import * as PrimitiveDialog from '@radix-ui/react-dialog';

const Overlay = styled(PrimitiveDialog.Overlay)`
  background-color: var(--blackA9);
  position: fixed;
  inset: 0;
  @media (prefers-reduced-motion: no-preference) {
    animation: overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled(PrimitiveDialog.Content)`
  background-color: var(--color-panel-solid);
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 550px;
  max-height: 85vh;
  overflow: hidden;
  overflow-y: auto;
  font-size: 0.95rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CloseCornerButton = styled(PrimitiveDialog.Close)`
  background-color: unset;
  border: unset;
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DialogComponent = {
  ...PrimitiveDialog,
  CloseCornerButton,
  Content,
  Overlay,
};

export default DialogComponent;
