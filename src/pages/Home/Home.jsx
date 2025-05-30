import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <Banner />
            <Suspense fallback={"Jobs are loading"}>
                <HotJobs jobs={jobs} />
            </Suspense>
        </div>
    );
};

export default Home;