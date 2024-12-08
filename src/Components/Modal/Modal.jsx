import React, { useEffect, useRef } from 'react';
import modalImg from "../../assets/Group.png";
import { NavLink } from 'react-router-dom';

const Modal = ({ isOpen, onClose, totalCost }) => {
    const modalRef = useRef();

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
    }, [isOpen]);

    return (
        <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-4/5 mx-auto">
                <div className='flex justify-center items-center mt-6'>
                    <img src={modalImg} alt={`${modalImg} image`} />
                </div>
                <h3 className="font-bold text-lg text-center mt-6">Payment Successfully</h3>
                <div className='divider'></div>
                <div className="py-4 text-[#09080F99] text-center -mt-6">
                    <p>Thanks for purchasing.</p>
                    <p className="py-4 text-[#09080F99] text-center">Total: ${totalCost.toFixed(2)}</p>
                </div>
                <div className="modal-action">
                    <form method="dialog" className='w-full -mt-8 pb-4'>
                        <NavLink to={"/"} className="btn w-full rounded-[32px] border-none" onClick={onClose}>Close</NavLink>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
