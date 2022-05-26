import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiCakeFill } from "react-icons/ri";
import { MdGroups } from 'react-icons/md';
import { HiOutlineClock } from 'react-icons/hi';
import { BsCalendar } from 'react-icons/bs';
import { IoIosArrowDropdown } from 'react-icons/io';

const MentalMath = () => {
    const Iconstyle = { color: "#61B0FF", fontSize: "1.5em" };
    return (
        <>
            <div className="md:px-32 px-8 mt-6">
                
                {/* Location Maths */}
                <div className='flex'>
                    <span className='place-content-center'>
                    <FaMapMarkerAlt style={Iconstyle}/>
                    </span>     
                    <p className='font-bold mx-4 text-blue-500 text-xl'>
                        Maths
                    </p>
                </div>
                
                <div className='font-bold text-3xl text-gray-600 mt-4'>
                    MENTAL MATH
                </div>

                <div className='md:grid md:grid-cols-2 flex flex-col-reverse justify-items-start'>
                    <div className='mr-2'>
                        <div className='mt-4 text-lg'>
                            Have Fun with Math! Get rid of your Math phobia. 
                            Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!
                        </div>
                        <div className='grid  grid-cols-2 px-8 my-4'>
                            <div className='flex my-2'>                                
                                <RiCakeFill style={Iconstyle}/>
                                <p className='ml-6'>7 - 8 Years</p>
                            </div>
                            <div className='flex my-2'>
                                <MdGroups style={Iconstyle}/>
                                <p className='ml-6'>7 - 8 Students</p>
                            </div>
                            <div className='flex my-2'>
                                <HiOutlineClock style={Iconstyle}/>
                                <p className='ml-6'>60 Mins Per Class</p>
                            </div>
                            <div className='flex my-2'>
                                <BsCalendar style={Iconstyle}/>
                                <p className='ml-6'>5 Weeks Duration</p>
                            </div>
                        </div>

                        <div className='border-2 rounded-md bg-gray-100 py-6 text-center font-bold text-2xl text-gray-600'>
                            ₹1499 INR For 10 Live Classes
                        </div>
                    </div>

                    {/* Guruji Photo */}
                    <div>
                       <img src="/guru.png" className='flex md:h-72 justify-content-center items-center pl-16' alt="guruji_img" />
                    </div>
                </div>

                <hr className="mt-6 bg-gray"></hr>
                
                {/* Available Batches */}
                <div className='font-bold text-gray-600 text-2xl mb-8 mt-4'>
                    Available Batches
                </div>

                {/* Box 1 Description */}
                <div className='border-2 rounded-md'>
                    <div className='mx-8 py-4'>
                        <h1 className='font-bold text-2xl text-sky-700 my-4'>Description</h1>
                        <p>The course aims at enhancing mathematical skills and brain development. 
                        It improves one's number sense and helps them gain the ability to understand relationships between quantities, 
                        while stimulating their brain and improving observation skills.
                        </p>

                        <h1 className='flex font-bold text-xl text-sky-700 my-4'>
                            <p>Details</p>
                            <div className='mx-6'><IoIosArrowDropdown /></div>                            
                        </h1>

                        <div>CLASS 1- Criss-cross multiplication</div>
                        <div>CLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method</div>
                        <div>CLASS 3- Multiplication upto 100 (Done mentally)</div>
                        <div>CLASS 4- Subtraction with Numbers near 10 and multiple of 10</div>
                        <div>CLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions</div>
                        <div>CLASS 6- Base method multiplication part 2 Division part 1</div>
                        <div>CLASS 7 - LCM and HCF</div>
                        <div>CLASS 8- Multiplication with series of 9 Division part 2</div>
                        <div>CLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhilam method ,Division of any number by 11</div>
                        <div>CLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5 25 125 Percentage</div>
                    </div>
                </div>

                {/* Box 2 Homework */}
                <div className='border-2 rounded-md my-4'>
                    <div className='mx-8 py-4'>
                    <h1 className='flex font-bold text-xl text-sky-700 my-4'>
                        <p>Homework</p>
                        <div className='mx-6'><IoIosArrowDropdown /></div>                       
                    </h1>
                            
                        <div>Comprehensive home assignments will be provided , which will be an extension of what is done is the class.</div>                        
                    </div>
                </div>

                {/* Box 3 Learning Goals */}
                <div className='border-2 rounded-md my-4'>
                    <div className='mx-8 py-4'>
                    <h1 className='flex font-bold text-xl text-sky-700 my-4'>
                        <p>Learning Goals</p>
                        <div className='mx-6'><IoIosArrowDropdown /></div>                         
                    </h1>
                    <div>Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!</div>                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default MentalMath;