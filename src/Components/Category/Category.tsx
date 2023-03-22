import Nominee from "../Nominee/Nominee";


interface CategoryProps {
    id: string;
    items: any[];
    title: string;
}
interface Props {
    category: CategoryProps;
    handleNomineeSelection: any;
    selectedNominee: any
}

const Category:React.FC<Props> = ({category, handleNomineeSelection, selectedNominee}) => {

  return (
    <div className='main-cat'>
        <h2 className='category-heading'>{category.title}</h2>
        <div className='categories'>{category.items.map((item, index)=> {
            return(
                <Nominee key={index} item={item} handleNomineeSelection={handleNomineeSelection} categoryId={category.id} selectedNominee={selectedNominee}/>
            )
        })}
        </div>
    </div>
  )
}

export default Category;