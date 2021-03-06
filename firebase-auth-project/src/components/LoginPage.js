import React, { useRef } from 'react'

function LoginPage() {

    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("login!")

        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;

        console.log(email, password)
    }


    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
   
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>Log in to your account 🔐</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            ref={loginEmailRef}
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email" 
                            placeholder="Your email" 
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input 
                            type="password" 
                            ref={loginPasswordRef}
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                            name="password"
                        />
                    </div>
                    <div className='flex justify-center items-center mt-g'>
                        <button
                            className={'bg-green py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark'}>LOGIN</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default LoginPage
