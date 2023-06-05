import './Navigation.css'

function Navigation(){



    return (
        <>
            <nav className="h-[10dvh] p-6 bg-white flex items-start md:flex-row justify-between md:items-center text-black cursor-pointer" id="navbar">
                <div className='p-2 w-[20%] flex flex-row justify-around items-center'>
                    <img src="./assets/EDYODA.svg" alt="Company Logo" className="ml-10 w-36 md:w-48"/>                    
                </div>

                <a href="#" className="toggle-button absolute right-4 flex flex-col justify-between w-8 h-5 lg:hidden">
                    <span className="bar w-full h-1 bg-blue-600 rounded-xl"></span>
                    <span className="bar w-full h-1 bg-blue-600 rounded-xl"></span>
                    <span className="bar w-full h-1 bg-blue-600 rounded-xl"></span>
                </a>
                
                <div className='p-2 w-[80%] hidden lg:flex lg:flex-row justify-around items-center navbar-links '>

                    <div className="dropdown relative" data-dropdown>
                        <button className="link rounded-lg p-2 text-xl" data-dropdown-button>Courses</button>
                        <div className="dropdown-menu w-max text-xl absolute left-0 top-full mt-1 bg-slate-100 rounded-md shadow-md opacity-0">
                            <div>
                                <div className="dropdown-links flex flex-col justify-around items-center p-4">
                                    <a href="#" className="link my-1 p-2 rounded-lg">Course 1</a>
                                    <a href="#" className="link my-1 p-2 rounded-lg">Course 2</a>
                                    <a href="#" className="link my-1 p-2 rounded-lg">Course 3</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown relative" data-dropdown>
                        <button className="link rounded-lg p-2 text-xl" data-dropdown-button>Programs</button>
                        <div className="dropdown-menu w-max text-xl absolute left-0 top-full mt-1 bg-slate-100 rounded-md shadow-md opacity-0">
                            <div>
                                <div className="dropdown-links flex flex-col justify-around items-center p-4">
                                    <a href="#" className="link my-1 p-2 rounded-lg">Program 1</a>
                                    <a href="#" className="link my-1 p-2 rounded-lg">Program 2</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around align-center">
                        <input type="text" placeholder="Search..." className=" bg-transparent border-b-2 text-lg text-black active:border-b-2 focus:outline-none"/>
                    </div>

                    <a href="#log-in" className="p-2 text-center text-xl">Log in</a>
                    <button id="join" className="mr-10 p-2 bg-blue-600 rounded-2xl text-white font-bold h-10">SIGN UP</button>

                </div>
                
                {/* Hamburger Nabvar */}
                <div className='absolute left-0 top-6 my-[6dvh] pb-4 w-full bg-white justify-around items-center ham-navbar '>

                    <div className="dropdown relative mx-auto mb-2" data-dropdown>
                        <button className="link rounded-lg p-2 text-xl" data-dropdown-button>Courses</button>
                        <div className="dropdown-menu w-max text-xl absolute left-full top-0 ml-1 bg-slate-100 rounded-md shadow-md opacity-0">
                            <div>
                                <div className="dropdown-links flex flex-col justify-around items-center p-4">
                                    <a href="#" className="link my-1 p-2 rounded-lg">Course 1</a>
                                    <a href="#" className="link my-1 p-2 rounded-lg">Course 2</a>
                                    <a href="#" className="link my-1 p-2 rounded-lg">Course 3</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown relative mx-auto mb-2" data-dropdown>
                        <button className="link rounded-lg p-2 text-xl" data-dropdown-button>Programs</button>
                        <div className="dropdown-menu w-max text-xl absolute left-full top-0 ml-1 bg-slate-100 rounded-md shadow-md opacity-0">
                            <div>
                                <div className="dropdown-links flex flex-col justify-around items-center p-4">
                                    <a href="#" className="link my-1 p-2 rounded-lg">Program 1</a>
                                    <a href="#" className="link my-1 p-2 rounded-lg">Program 2</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around align-center mx-auto mb-2">
                        <input type="text" placeholder="Search..." className=" bg-transparent border-b-2 text-lg text-black active:border-b-2 focus:outline-none"/>
                    </div>

                    <a href="#log-in" className="p-2 text-center text-xl mx-auto mb-2">Log in</a>
                    <button id="join" className="p-2 bg-blue-600 rounded-2xl text-white font-bold h-10 mx-auto mb-2">SIGN UP</button>

                </div>

                


            </nav>
        </>
    )
}

export default Navigation;