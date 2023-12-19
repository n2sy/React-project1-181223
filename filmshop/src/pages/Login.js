import React, { useEffect, useState } from 'react'
import styles from './Login.module.css';
function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [formValid, setFormValid] = useState(false);
    function emailHandler(e) {
        setEmail(e.target.value);
    }
    function pwdHandler(e) {
        setPwd(e.target.value);
    }
    useEffect(() => {
        setFormValid(email?.includes('@') && pwd?.length > 4)

    }, [email, pwd])
  return (
    <form className={styles.form}>
        <div className={styles.control}>
        <label>E-mail</label>
        <input type="text" onChange={emailHandler}></input>
        <label>password</label>
        <input type="text" onChange={pwdHandler}></input>

        </div>

        <div>
            <button disabled={!formValid} type="submit">Login</button>
        </div>
    </form>
  )
}

export default Login