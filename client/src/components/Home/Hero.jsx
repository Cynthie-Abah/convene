import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/Home.module.css'; // Import the CSS module

const Hero = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate(); 
    const handleClick = () => {
        if (input === "" || input.length !== 8) {
            alert("Provide a valid meeting Id")
            return false;
        } else {
            return navigate(`/meeting/${input}/user`);
        }
    }

    return (
        <div className={styles.hero}>
            <div className={styles['hero-container']}>
                <span className={styles['hero-text']}>Joining as a participant ?</span>
                <div className={styles['input-container']}>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={styles['input-field']}
                        placeholder='Enter code here'
                        id='meetingId'
                    />
                    <button
                        onClick={handleClick}
                        className={styles['go-button']}
                    >
                        Go
                    </button>
                </div>
            </div>
            <div className='w-full md:w-9/12 mx-auto text-center mt-6 mb-9'>
                <h1 className={styles.heading}>The Easiest way to make <br /> your meetings interactive</h1>
            </div>
            <div className='w-full md:w-6/12 mx-auto text-center text-lg '>
                <p className={styles['sub-heading']}>
                    Engage your participants with live polls, Q&A, quizzes and word clouds
                </p>
                <span className='flex gap-2 items-center justify-center'>
                    <hr className='hidden md:block w-3 border border-green-600' />
                    <p className={styles['sub-heading']}>
                        Whether you meet in the office, online or in-between.
                    </p>
                </span>
                <Link to={"/meeting/new"}>
                    <button className={styles['start-meeting-button']}>
                        Start Meeting
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
