import React from 'react'

function WelcomePage() {

    const handleLogout = () => {
        alert("Log out!");
    }

    return (
        <>
            <div className="items-center">
                Welcome!
            </div>
            <button 
                className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}

export default WelcomePage
