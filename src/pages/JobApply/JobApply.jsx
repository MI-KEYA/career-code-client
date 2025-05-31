import React from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import UseAuth from '../../Hooks/UseAuth';

const JobApply = () => {
    const { id } = useParams();
    const { user } = UseAuth();
    console.log(user);


    return (
        <div>
            <h3>Apply for the job</h3>
        </div>
    );
};

export default JobApply;