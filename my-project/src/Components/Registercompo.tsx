"use client";
import {useState} from 'react';
import { IArticleInput, IUserLogin } from '../../types/interfaces';
import { GuardedRoutes, axiosConf } from '../../config/axios-config';

export default function Registercompo() {
    const [formData, setFormData] = useState<IUserLogin>(
        { 
            email: "email",
            password: "password",
        }
    )

    function handleChange(event: any) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value
            }
        })
    }

    const [error, setError] = useState("")
    async function registerUser() {
        console.log("register user");
        await axiosConf.post(
            `/${GuardedRoutes.onlyLoggedCanWrite}/users/register`,
            formData,
        )
        .then((d) => console.log(d))
        .catch((e) => {
            console.log(e)
            setError("make sure that your password and email are riten proprly")
        });
    }

    return (
        <>
            <form className="mx-auto max-w-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {!formData.email && <p className="mx-auto text-center text-red-700 font-bold text-xl my-4">email is not valid</p>}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {!formData.password && <p className="mx-auto text-center text-red-700 font-bold text-xl my-4">password is not valid</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        onClick={(ev)=> {
                            ev.preventDefault();
                            registerUser()
                        }}
                        className="mt-4 bg-secondary text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Sign In
                    </button>
                </div>
            </form>
            {error && <p className="mx-auto text-center text-red-700 font-bold text-xl my-4">{error}</p>}
        </>
    )
}