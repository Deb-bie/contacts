import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import './add.css'


const Add = () => {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState();
    


    const handleSubmit = (e) => {
        e.preventDefault();

        let contact={
            name,
            number,
        }

        setContacts([...contacts, contact]);


        setName('');
        setNumber('');
        // navigate("/view")
    }

    useEffect(()=>{

        const data = localStorage.getItem('data')
        
        if(data){
          setContacts(JSON.parse(data))
         }
        
    },[])
        
    useEffect(()=>{
    
        localStorage.setItem('data',JSON.stringify(contacts))
    
    },[contacts])




    return (
        <div>

            <Navbar />

            <div className="main">
                <div className="app-wrapper">
                    <div className="header">
                        <h1>New contact</h1>
                    </div>

                    <div className="input-container">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type='text'
                                name='name'
                                value={name} 
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                aria-label='Name'
                            />

                            <br /><br />

                            <input 
                                type='phone'
                                name='number'
                                value={number} 
                                required
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder='Phone Number'
                                aria-label='Phone Number'
                            />

                            <br /><br />

                            <div className="submit-button">
                                <input type='submit' value='Add Contact' className='submit' />
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Add
