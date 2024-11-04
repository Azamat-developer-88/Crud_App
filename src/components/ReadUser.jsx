import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ReadUser() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className="w-full max-w-md bg-slate-50 shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Details User</h1>
                <div className="mb-4">
                   <strong><u>Name:</u> {data.name} </strong>
                </div>
                <div className="mb-4">
                    <strong><u>Email:</u> {data.email} </strong>
                <div className="mb-2">
                     <strong><u>Password:</u> {data.password} </strong>
                </div>
                <div className="mb-4">
                     <strong><u>Phone:</u> {data.phone} </strong>
                </div>
                  <div className='flex justify-center items-center gap-2'>
                  <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={`/update/${data.id}`}>Edit</Link>
                  <Link className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' to={`/`}>Back</Link>
                  </div>
            </div>  
        </div>
        </div>
    );
}

export default ReadUser;
