import React , {useState} from 'react';
import  TextList  from '../../Mock/Mock';
import InputComponent from '../../components/Input/InputComponent'
import './ProjectContainer.css'

const  Project = () => {

const [search, setSearch] = useState('')

    const handleInput = (event) => {
        setSearch(event.target.value)
    }
    const filteredProjects = TextList.filter(project => project.name.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase()))

return(
    
   <div className='project-block'>
       <h1>All Items</h1>
        <input  placeholder='Search' value={search} onChange={handleInput} className='item-input'/>
        {/* <InputComponent  placeholder='search' value={search} onChange={handleInput}/> */}
    <div className='box-item'>
    <div className='column'><b>Image</b></div>
        <div className='column'><b>Name</b></div>
        <div className='column'><b>Description</b></div>
        <div className='column'><b>Created date</b></div>
    </div>
    {filteredProjects.map(project => (
                <div key={project.id} className='item-block'>
                    <div className='item-column' ><img src={project.image} className='img-item'/></div>
                    <div className='item-column' >{project.name}</div>
                    <div className='item-column'>{project.description}</div>
                    <div className='item-column' >{project.date}</div>
                </div>
    ))}
    </div>
)
}

export default Project 