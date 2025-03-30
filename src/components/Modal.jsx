import {createPortal} from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>
      {isOpen && (
        <>
          <div className="mx-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
          <div onClick={onClose} className="absolute top-0 backdrop-blur h-screen w-screen z-40" />
        </>
      )}
    </>
  , document.getElementById('modal-root'));
};

export default Modal;
