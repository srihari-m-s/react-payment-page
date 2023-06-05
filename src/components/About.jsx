function About() {


    
    return (
        <div className='w-full lg:w-5/12 lg:h-4/5 px-10 m-14 md:m-20 flex flex-col justify-between text-sm sm:text-lg md:text-2xl text-white bg-transparent rounded-3xl'>
            <div className=''>
                <h1 className="mb-3 text-2xl md:text-5xl">Access curated courses worth</h1>
                <h1 className="mb-3 text-2xl md:text-5xl">₹ <s className="decoration-red-600 decoration-4">18,500</s> at just <span className="font-bold text-blue-600">₹ 179</span> per year!</h1>
            </div>
            <h2 className="py-4 flex flex-row items-center gap-x-2 md:gap-x-3 justify-center lg:justify-start"><img src="./assets/book.svg" alt="icon-img" className="mr-4 w-10 md:w-16"/> <span className="font-bold text-blue-600">100+</span> Job relevant courses</h2>
            <h2 className="py-4 flex flex-row items-center gap-x-2 md:gap-x-3 justify-center lg:justify-start"><img src="./assets/clock1.svg" alt="icon-img" className="mr-4 w-10 md:w-16"/> <span className="font-bold text-blue-600">20,000+</span> Hours of content</h2>
            <h2 className="py-4 flex flex-row items-center gap-x-2 md:gap-x-3 justify-center lg:justify-start"><img src="./assets/live.svg" alt="icon-img" className="mr-4 w-10 md:w-16"/> <span className="font-bold text-blue-600">Exclusive</span> webinar classes</h2>
            <h2 className="py-4 flex flex-row items-center gap-x-2 md:gap-x-3 justify-center lg:justify-start"><img src="./assets/scholor.svg" alt="icon-img" className="mr-4  w-10 md:w-16"/> Scholorship worth <span className="font-bold text-blue-600">₹ 94,500</span></h2>
            <h2 className="py-4 flex flex-row items-center gap-x-2 md:gap-x-3 justify-center lg:justify-start"><img src="./assets/ads.svg" alt="icon-img" className="mr-4 w-10 md:w-16"/> <span className="font-bold text-blue-600">Ad Free</span> learning experience</h2>
        </div>
    )
}

export default About;