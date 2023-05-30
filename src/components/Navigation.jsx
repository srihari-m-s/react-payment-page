function Navigation(){



    return (
        <>
            <nav className="h-[10dvh] p-6 bg-white flex flex-row justify-between items-center text-black cursor-pointer" id="navbar">
                <div className='p-2 flex flex-row basis-2/5 justify-around align-center'>
                    <img src="./assets/EDYODA.svg" alt="Company Logo" className="ml-10"/>
                    
                    <select name="courses" id="courses" className="bg-transparent border-none text-base cursor-pointer focus:outline-none">
                        <option value="courses">Courses</option>
                    </select>
                    
                    <select name="programs" id="programs" className="bg-transparent border-none text-base cursor-pointer focus:outline-none">
                        <option value="programs">Programs</option>
                    </select>
                    
                </div>
                
                <div className='p-2 flex flex-row basis-2/5 justify-around align-center'>
                    <div className="flex flex-row justify-around align-center">
                        <input type="text" placeholder="Search..." className=" bg-transparent border-b-2 text-lg text-black active:border-b-2 focus:outline-none"/>
                    </div>
                    <a href="#log-in" className="p-2 text-center">Log in</a>
                    <button id="join" className="mr-10 p-2 bg-blue-600 rounded-2xl text-white font-bold h-10">SIGN UP</button>
                </div>
            </nav>
        </>
    )
}

export default Navigation;