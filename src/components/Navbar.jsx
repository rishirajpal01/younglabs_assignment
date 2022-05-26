const Navbar = () => {
    return (
        <>
            <div className="grid grid-1 grid-cols-2 px-8 pt-4">
                <div className="sm:ml-16 flex" >
                    <a href="https://app.younglabs.in/">
                        <img src="/YoungLabsLogo.png" className='h-12' alt="YoungLabs_Logo" />
                    </a>
                </div>
                <div className="justify-self-end text-center bg-lime-500 rounded-md shadow-md text-white text-xl">
                    <button className="flex font-bold px-4 mt-4">Login</button>
                </div>
            </div>
            
            <hr className="mt-6 bg-gray"></hr>
        </>
    )
}

export default Navbar;