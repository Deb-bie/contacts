import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const getData=()=>{
    const data = localStorage.getItem('data');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}


const Edit = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const contacts = JSON.parse(localStorage.getItem('data'));

    const [name, setName] = useState(location.state.name);
    const [number, setNumber] = useState(location.state.number);

    const x = location.state.id-1


    const handleUpdate = (e) => {
        e.preventDefault();

        let contact={
            name,
            number
        }

        contacts[x] = contact

        localStorage.setItem('data',JSON.stringify(contacts))

        navigate('/view')

        setName('');
        setNumber('');

    }



    return (
        <div className="main">
            <div className='app-wrapper'>
                <div className='header'>
                    <h1>Edit Contact</h1>
                </div>

                <div className='input-container'>
                    <form onSubmit={handleUpdate} >
                    <input 
                        type='text'
                        value={name} 
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        aria-label='Name'
                    />

                    <br /><br />

                    <input 
                        type='phone'
                        value={number} 
                        required
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder='Phone Number'
                        aria-label='Phone Number'
                    />

                    <br /><br />

                    <div className='submit-button'>
                        <input type='submit' value='Update' className='submit' />
                    </div>

                    
                </form>
                </div>

            </div>
            
        </div>
    )
}

export default Edit
