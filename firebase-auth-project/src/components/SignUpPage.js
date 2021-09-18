import React, { useRef, useState} from 'react';
// import Firebase from '../firebase';

function SignUpPage() {

    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();


    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")

        const email =  signUpEmailRef.current.value;
        const password = signUpPasswordRef.current.value;
        console.log('try to create firebae auth account')

        // Firebase.auth()
        // .createUserWithEmailandPassword(email, password)
        // .then(() => alert("account created!"))
        // .catch(error => console.log(error))

        console.log(email, password)
    }

    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
   
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Sign up for an account!</h1>
                <form onSubmit={handleSignUpSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            ref={signUpEmailRef}
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
                            ref={signUpPasswordRef}
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                            name="password"
                        />
                    </div>
                    <div className='flex justify-center items-center mt-g'>
                        <button
                            type="submit"
                            className={'bg-green py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark'}>
                                SIGN UP</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default SignUpPage
