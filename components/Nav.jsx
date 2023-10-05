import React, { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";
import { UserAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <nav className={styles.nav}>
          <Link href="/">
            <span>Whim</span>
          </Link>
          <li className={styles.nav__links}>
            <Link href="/">
              <ul>Home</ul>
            </Link>
            {loading ? (
              <div className={styles.skeleton__container}>
                <div className={styles.skeleton__loadingState}> </div>
                <div className={styles.skeleton__loadingState}> </div>
              </div>
            ) : !user ? (
              <>
                <button onClick={handleSignin} className={styles.nav__login}>
                  Login
                </button>
                <button onClick={handleSignin} className={styles.nav__login}>
                  Sign in
                </button>
              </>
            ) : (
              <div className={styles.account__container}>
                <div>
                  <Image
                    src={user.photoURL}
                    width={60}
                    height={60}
                    className={styles.account__icon}
                  />
                </div>
                <div className={styles.account__dropdown}>
                    <Link href="/profile">
                      Profile
                    </Link>
                    <Link href="/account-settings">
                      Account Settings
                    </Link>
                    <span onClick={handleSignOut}>Log Out</span>
                </div>
              </div>
            )}
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
