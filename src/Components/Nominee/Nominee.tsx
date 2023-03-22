import React from "react";

interface Item {
    title: string;
    id: string;
    photoUrL: string;
}

interface ItemProps {
    item: Item;
    handleNomineeSelection:(categoryId: string, item: Item) => void;
    categoryId: string;
    selectedNominee: any
}
const Nominee:React.FC<ItemProps> = ({item, handleNomineeSelection, categoryId, selectedNominee}) => {
    const isSelected = selectedNominee[categoryId]?.id === item?.id

  return (
   <div className={`nominee-item ${isSelected && 'nominee-item-selected'} `}>
        <p className='nominee-title'>{item.title}</p>
        <img alt="nominee" src={item.photoUrL}/>
        {isSelected ? <span className="selected-text">Selected</span> : <button onClick={() => handleNomineeSelection(categoryId, item)}>Select Button</button>}
         
    </div>
  )
}

export default Nominee;