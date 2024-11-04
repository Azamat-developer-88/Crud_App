import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateUsers() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        phone: '', 
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
            .then(res => console.log(res))
            .then(() => navigate('/viev'))
            .catch(err => console.log(err));
    };

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className="w-full max-w-md bg-slate-50 shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Create User</h1>
                <form className="flex flex-col drop-shadow-xl gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Name"
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Email"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Password"
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="border border-gray-300 p-3 rounded-md w-full"
                            placeholder="Enter Phone"
                            onChange={(e) => setValues({ ...values, phone: e.target.value })}
                            required
                        />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                        Submit
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

export default CreateUsers;
