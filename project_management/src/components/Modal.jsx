import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-sm"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button
          label={buttonCaption}
          css="px-4  w-50 h-10 rounded text-lg text-neutral-400 bg-neutral-700"
        />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
