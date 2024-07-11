import React from 'react'
import { ToastContainer, cssTransition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/toast.css';
import checkIcon from '../../component/assert/gg_check-o.svg'
import errorIcon from '../../component/assert/Vector.svg'


const VerticalSlide = cssTransition({
    enter: 'slideInUp',
    exit: 'slideOutDown',
    duration: [200, 200] 
});
const Toast = () => {
    const toastNotify = () => {
        toast.success("Congratulations, Your Account Registration Has Been Successfully Created.", {
        className: "custom-toast custom-toast-success",
          transition: VerticalSlide,
          position: "top-left",
          autoClose: 1000,
          icon:  (
            <div className='icon-wrapper icon-wrapper-check'>
                <img src={checkIcon} className='image-check' alt="Success Icon" />
            </div>
        )

        });
          toast.error("This account already exists with the number provided. Please try to login.", {
            className: "custom-toast custom-toast-error", 
            transition: VerticalSlide,
              position: "top-left",
              autoClose: 1000,
          icon: (
            <div className='icon-wrapper icon-wrapper-error'>
                <img src={errorIcon} className='image-error' alt="Error Icon" />
            </div>
        )
            })
        //     toast.warning("Flip Effect!", {
        //           transition: Flip,
        //           position: "bottom-left",
        //         })
        //     toast.info("Bounce Effect!", {
        //               transition: Bounce,
        //               position: "bottom-right",
        //             })
      };
      
      return (
        <div className='container'>
          <h1 className="heading">Transition Effect with Toastify React</h1>
          <button className='button' onClick={toastNotify}>Pop that toast!</button>
          <ToastContainer />
        </div>
      );
    }


export default Toast
