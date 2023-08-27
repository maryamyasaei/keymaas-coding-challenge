import { ChangeEventHandler, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Toaster from '../components/toaster';

interface IFormData {
    email?: string
    password?: string
}

export default function LoginView() {
    const [formData, setFormData] = useState<IFormData>({})
    const [errorMessage, setErrorMessage] = useState('')

    const navigateTo = useNavigate()

    const updateFormData: ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // Fake backend endpoint
    const loginToKeyMaas = async (formData: IFormData) => {
        /**
         *   Call to login endpoint
         *   axios.post('/auth/login', {
         *      ...formData
         *   })
         **/ 

        // mocking a simple login logic
        if(formData.email === 'maryam.yasaee@gmail.com' && formData.password === '123456') {
            return Promise.resolve({
                loggedIn: true
            })
        } else {
            return Promise.reject('Username and/or password is incorrect')
        }
    }

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault()

        try {
            await loginToKeyMaas(formData)

            // this is a fake step to store user authentication data to read it later
            localStorage.setItem('loggedIn', 'true')

            // redirect to home page
            navigateTo('/')
        } catch (error: any) {
            setErrorMessage(error)
        }
    }
    
    return (
        <div className="h-screen w-screen dark:bg-slate-700 py-12">
            <Toaster message={errorMessage} visible={!!errorMessage} onClose={() => setErrorMessage('')} />

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center mb-5">
                    <h2 className="flex items-center justify-center mt-10 text-center text-2xl font-bold leading-9 tracking-tight 
                        text-gray-900 dark:text-white">
                        <img
                            className="mr-1 h-20 w-auto"
                            src="logo.png"
                            alt="KeyMaas"
                        />
                        KeyMaaS
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400">Login with your valid email and password</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleFormSubmit} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                
                                    value={formData.email}
                                    onChange={updateFormData}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">
                                Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 dark:text-blue-400 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                
                                value={formData.password}
                                onChange={updateFormData}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>

                            <button
                                type="submit"
                                className="
                                    flex 
                                    w-full 
                                    align-center 
                                    justify-center 
                                    rounded-md 
                                    bg-white 
                                    text-slate-500 
                                    px-3 
                                    py-1.5 
                                    text-sm 
                                    font-semibold 
                                    leading-6 
                                    border-slate-200
                                    border-y border-x
                                    shadow-sm 
                                    hover:bg-gray-50
                                    focus-visible:outline 
                                    focus-visible:outline-2 
                                    focus-visible:outline-offset-2 
                                    focus-visible:outline-indigo-600
                                    ">
                                <img className="h-5 mr-3" src="/google.svg" alt="login with google to KeyMaaS" />
                                Login with Google
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 dark:text-blue-400 hover:text-indigo-500">
                        Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}