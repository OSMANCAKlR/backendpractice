import React, { useEffect, useState } from 'react'
import { UserAuth } from '@/context/AuthContext'
import styles from "../styles/Profile.module.css"

function Profile() {
  const {user} = UserAuth();
  const [loading, setLoading] =useState(true);
  useEffect(()=> {
    const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        setLoading(false);
    }
    checkAuthentication()
  },[user])
  
  return (
    <div className="container">
      <div className="row">
        <h1>Profile!</h1>
        {loading ? (
          <div className={styles.skeleton__loadingState}> </div>
        ) : user ? (
          <p>Welcome, {user.displayName} - you are logged in cuh!</p>
        ) : (
        <p>You must be logged in to view this page fella</p>
        )}
      </div>
    </div>
    )
}

export default Profile