import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function UpdateUser() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, data)
            .then(() => {
                alert("User updated successfully");
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className="w-full max-w-md bg-slate-50 shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Update User</h1>
                <form className="flex flex-col drop-shadow-xl gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Name"
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Phone"
                            value={data.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                        Update
                    </button>
                    <Link
                        to="/"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full text-center mt-2"
                    >
                        Back
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
