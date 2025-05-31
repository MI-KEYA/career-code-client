import React from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();
    // console.log(user);


    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn, github, resume);

        const application = {
            jobId,
            applicant: user.name,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })


    }

    return (
        <div className='w-1/4 mx-auto my-10'>
            <h3 className='text-center my-5 font-semibold text-3xl'>Apply for the job</h3>
            <form onSubmit={handleFormSubmit} >
                <fieldset className="bg-base-200 border-base-300 rounded-box  border p-4">

                    <label className="label">LinkedIn Link</label><br></br>
                    <input type="url" name='linkedIn' className="input mb-3" placeholder="LinkedIn Link" /><br></br>

                    <label className="label">Github Link</label><br />
                    <input type="url" name='github' className="input mb-3" placeholder="Github Link" /><br></br>

                    <label className="label">Resume Link</label><br />
                    <input type="url" name='resume' className="input mb-3" placeholder="Resume Link" /><br></br>

                    <div className='flex justify-center'>
                        <input type="submit" className='btn btn-primary' value="Apply" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;