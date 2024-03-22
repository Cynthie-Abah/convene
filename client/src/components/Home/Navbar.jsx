import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.css'; // Import the CSS module

const Navbar = ({ id }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-content']}>
        <Link to={"/"} className={styles['nav-link']}>
          Convene
        </Link>
        {id == null ? (
          <div>
            <Link to={"/signup"} className={`${styles['nav-btn']} ${styles['nav-btn--signup']}`}>
              Sign up
            </Link>
          </div>
        ) : (
          <Link to={"/user/profile"} className={styles['nav-btn']}>
            Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
