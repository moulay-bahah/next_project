"use client";



export default function LoginCompo() {

    function logout() {
        localStorage.removeItem("token");
    }

    return (
        <div className="container mx-auto px-4 my-10 flex items-center flex-col">
            <p className="text-center text-3xl mb-4">
                are you sure that you want to logout
            </p>
            <button
                className="mt-4 bg-secondary text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={(ev)=> {
                    ev.preventDefault();
                    logout()
                }}
            >
                yes, i am sure
            </button>
        </div>
    )
}