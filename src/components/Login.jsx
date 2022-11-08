import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import AppContext from '../context/appContext';

const Login = () => {
    const context = useContext(AppContext);

    const { userAuth, setUserAuth } = context

    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const emailHandler = (e) => {
        setemail(e.target.value);
    }
    const passwordHandler = (e) => {
        setpassword(e.target.value);
    }


    const loginHandler = (e) => {
        e.preventDefault();
        setUserAuth(true);
        navigate('/home');


    }
    useEffect(() => {
        if (userAuth) {
            navigate('/home');
        }
    }, [])

    return (
        <div className='container'>
            <div className='row'>

                <form onSubmit={loginHandler}>

                    <h3>User Login</h3>
                    <div className="mb-3">
                        <input type="text" required className="form-control" id="exampleFormControlInput1" placeholder="Username/Email" value={email} onChange={emailHandler} />
                    </div>
                    <div className="mb-3">
                        <input type='password' required className="form-control" id="exampleFormControlTextarea1" placeholder="Password" value={password} onChange={passwordHandler} />
                    </div>
                    <button className='btn btn-warning'>
                        Login
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login