import React from 'react'

interface Props {
  open: boolean;
  setOpen: any
}

const ResultModal = ({open, setOpen}: Props) => {
  

  return (
    <>
    {open && <div className='result-modal'>
      <span onClick={()=> setOpen(false)} className='close-modal'>&times;</span>
      <h2>Succes Modal</h2>
    </div>}
    </>
  )
}

export default ResultModal;