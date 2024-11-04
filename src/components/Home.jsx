import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this user?');
        if (confirm) {
            axios.delete(`http://localhost:3000/users/${id}`)
                .then(() => {
                    fetchUsers(); 
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-3xl font-bold'>List of Users</h1>
            <div className='w-3/4 mt-6 rounded-md bg-slate-50 shadow-md p-4'>
                <div className='flex justify-self-end'>
                    <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' to="/create">Add +</Link>
                </div>
                <table className='w-full divide-y-2 divide-gray-200'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center divide-y divide-gray-200'>
                        {data.map(user => (
                            <tr key={user.id} className='odd:bg-gray-300'>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.phone}</td>
                                <td className='flex justify-center items-center gap-2'>
                                    <Link to={`/read/${user.id}`} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>View</Link>
                                    <Link to={`/update/${user.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
