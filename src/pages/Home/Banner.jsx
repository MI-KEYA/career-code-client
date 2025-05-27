import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
2
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-98">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 110, 50] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [80, 150, 80] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{
                            rotate: 360,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl font-bold">Latest job for you!
                    </motion.h1> */}
                    <motion.h1

                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl font-bold">Remote <motion.span
                            animate={
                                {
                                    color: ["#CC6CE7", "#5DE2E7", "#EFC3CA"],
                                    transition: { duration: 2, repeat: Infinity }
                                }
                            }>
                            job</motion.span> for you!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;