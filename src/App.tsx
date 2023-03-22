import './App.css';
import Ballot from './Components/Ballot/Ballot';
import { useRef, useState } from "react";
import ResultModal from './Components/Modal/ResultModal';



function App() {
  const [open, setOpen] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop) 

  const executeScroll = () => scrollToRef(myRef)

  const handleSubmit = () => {
    setOpen(!open)
    executeScroll()
  }
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className='app'>
      <Ballot />
      <div className="btn-wrapper">
        <button onClick={handleSubmit} className="submit">SUBMIT VOTE BUTTON</button>
      </div>
      <div ref={myRef}>
      <ResultModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default App;
