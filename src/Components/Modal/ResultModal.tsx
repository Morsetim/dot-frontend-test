import { useRef } from "react";

interface Props {
  open: boolean;
  setOpen: any;
}

const ResultModal = ({open, setOpen}: Props) => {
  if(!open){
    return null;
  }

  return (
    <>
    <div className="overlay">
     <div className='result-modal'>
      <span onClick={()=> setOpen(false)} className='close-modal'>&times;</span>
      <h2 className='modal-text'>Success Modal</h2>
    </div>
    </div>
    </>
  )
}

export default ResultModal;