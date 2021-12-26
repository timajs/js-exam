import React , {useState} from 'react';
import  StackList  from '../../Mock/Stack';
import InputComponent from '../../components/Input/InputComponent'
import './StackContainer.css'

const  Stack = () => {

const [search, setSearch] = useState('')

    const handleInput = (event) => {
        setSearch(event.target.value)
    }
    const filteredStack = StackList.filter(stacks => stacks.name.toLowerCase().includes(search.toLowerCase()))

return(
    
   <div className='stack-box'>
       <h1>Stack</h1>
        <input  placeholder='Search' value={search} onChange={handleInput} className='item-input'/>
        {/* <InputComponent  placeholder='search' value={search} onChange={handleInput}/> */}
    <div className='stack-item'>
        <div className='stack-name'><b>Name</b></div>
    </div>
    <div className='stack-block'>
    {filteredStack.map(stacks => (
                <div key={stacks.id} className='stack-wrap'>
                    <div className='stack-column' >{stacks.id}) {stacks.name}</div>
                </div>
    ))}
     </div>
    </div>
)
}

export default Stack 