// Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Register.module.css'; // Import shared styles

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please make sure no field is empty")
            return false;
        }
        alert("Login Successful");
        navigate("/user/profile");
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Link to={"/"} className={styles.logo}>
                    Convene
                </Link>

                <form onSubmit={handleSubmit}>
                    <div className={styles['formGroup']}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your E-mail"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['formGroup']}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your Password"
                            className={styles.input}
                        />
                    </div>

                    <p className={styles.link}>
                        Don't have an Account?{' '}
                        <Link className={styles.link} to={"/signup"}>
                            Signup
                        </Link>{' '}
                        instead
                    </p>

                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
