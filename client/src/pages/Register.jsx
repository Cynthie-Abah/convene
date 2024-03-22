// Register.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Register.module.css'; // Import CSS module

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== repassword) {
            alert("Passwords do not match");
            return false;
        }

        if (email === "" || password === "" || username === "") {
            alert("Please make sure no field is empty");
            return false;
        }
        alert("Signup Successful");
        navigate("/user/profile");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Link to={"/"} className={styles.logo}>
                    Convene
                </Link>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Enter your Username"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your E-mail"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your Password"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                            type="password"
                            placeholder="Re-enter your Password"
                            className={styles.input}
                        />
                    </div>

                    <p className={styles.link}>
                        Already have an Account?{' '}
                        <Link className={styles.link} to={"/login"}>
                            Login
                        </Link>{' '}
                        instead
                    </p>

                    <button type="submit" className={styles.button}>
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
