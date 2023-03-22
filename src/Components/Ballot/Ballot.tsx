import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../Api/Api";
import Category from "../Category/Category";
import ResultModal from "../Modal/ResultModal";
import { useRef } from "react";

const Ballot = () => {
  const [data, setData] = useState([]);
  const [selectedNominee, setSelectedNominee] = useState<any>({})
  const [open, setOpen] = useState(false);
  const myRef = useRef<HTMLDivElement>(null)

  const handleNomineeSelection = (categoryId: string, nominee: any) => {
    setSelectedNominee({ ...selectedNominee, [categoryId]: nominee })
  }

  // console.log(selectedNominee, "selectedNominee")

  const getBallotData = async () => {
    const res = await api.getBallotData()
    setData(res.items)
  }

  const executeScroll = () => myRef.current?.scrollIntoView({behavior: 'smooth'}) 

  useEffect(() => {
    getBallotData()
  }, [])

 const handleSubmit = () => {
   executeScroll()
  setOpen(true)
 }
  return (
    <div className='ballot'>
      <div>
        {data.map((category, index) => (
          <Category key={index} category={category} handleNomineeSelection={handleNomineeSelection} selectedNominee={selectedNominee} />
        ))}
      </div>
      <div className="btn-wrapper">
        <button onClick={handleSubmit} className="submit">SUBMIT VOTE BUTTON</button>
      </div>
      <div ref={myRef}>
        <ResultModal open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default Ballot;