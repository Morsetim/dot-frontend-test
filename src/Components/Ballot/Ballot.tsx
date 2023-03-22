import { useEffect, useState } from "react";
import api from "../../Api/Api";
import Category from "../Category/Category";


const Ballot = () => {
  const [data, setData] = useState([]);
  const [selectedNominee, setSelectedNominee] = useState<any>({})

  const handleNomineeSelection = (categoryId: string, nominee: any) => {
    setSelectedNominee({ ...selectedNominee, [categoryId]: nominee })
  }

  const getBallotData = async () => {
    const res = await api.getBallotData()
    setData(res.items)
  }

  useEffect(() => {
    getBallotData()
  }, [])


  return (
    <div className='ballot'>
      <h2 className="globe">Golden Globe Award</h2>
      <div className="cat-wrapper">
        {data.map((category, index) => (
          <Category key={index} category={category} handleNomineeSelection={handleNomineeSelection} selectedNominee={selectedNominee} />
        ))}
      </div>
    </div>
  )
}

export default Ballot;