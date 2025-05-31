import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineCategory, MdOutlineDateRange, MdOutlineLocationOn, MdOutlinePayments, MdOutlineSubtitles } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {
        _id,
        title,
        applicationDeadline,
        salaryRange,
        jobType,
        company,
        location,
        status,
        category,
        description,
        responsibilities,
        company_logo


    } = data;
    return (
        <div>
            <div className='flex items-center mt-10 justify-center gap-3'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="Shoes" />
                </figure>
                <div>
                    <h1 className=' text-4xl font-bold '>{company}</h1>

                </div>
            </div>

            <div className='w-2/3 mx-auto mb-10  p-5 '>
                <h1 className=' text-3xl border-b-2 font-bold my-5'>Employment Information</h1>
                <div className='grid grid-cols-2 shadow-lg p-5 mb-5'>
                    <div>
                        <div className='grid grid-cols-2  mb-5'>
                            <h1 className='flex items-center text-gray-400 gap-2'><LiaIndustrySolid /> Industry </h1><p className='font-semibold'>{category}</p>
                        </div>
                        <div className='grid grid-cols-2  mb-5'>
                            <h1 className='flex items-center  text-gray-400 gap-2'><MdOutlinePayments /> Salary </h1><p className='flex items-center font-semibold'><FiDollarSign />{salaryRange.min} -<FiDollarSign />{salaryRange.max}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-5'>
                            <h1 className='flex items-center text-gray-400 gap-2'><MdOutlineCategory /> JobType </h1><p className='font-semibold'>{jobType}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-5'>
                            <h1 className='flex items-center text-gray-400 gap-2'><MdOutlineSubtitles /> Position </h1><p className='font-semibold'>{title}</p>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2  mb-5'>
                            <h1 className='flex items-center text-gray-400 gap-2'><MdOutlineLocationOn /> Location </h1><p className='font-semibold'>{location}</p>
                        </div>
                        <div className='grid grid-cols-2  mb-5'>
                            <h1 className='flex items-center  text-gray-400 gap-2'><GrStatusGood /> Status </h1><p className='font-semibold'>{status}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-5'>
                            <h1 className='flex items-center text-gray-400 gap-2'><MdOutlineCategory /> JobType </h1><p className='font-semibold'>{title}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-5'>
                            <h1 className='flex items-center text-gray-400 gap-2'><MdOutlineDateRange /> Deadline </h1><p className='font-semibold'>{applicationDeadline}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>{description}</h1>
                    <div className="p-3">
                        <p className='font-bold my-4'>Responsibilities</p>
                        <ul className='list-disc list-inside text-black'>
                            {responsibilities.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                <Link to={`/jobApply/${_id}`}>
                    <button className='btn mt-5 btn-primary'>Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;