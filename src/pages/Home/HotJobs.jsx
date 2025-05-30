import React from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = ({ jobs }) => {


    return (

        <div>
            <h2 className='text-center text-3xl my-10'>Hot Jobs Of The Day</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(jobs => <HotJobCard key={jobs._id} jobs={jobs}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;