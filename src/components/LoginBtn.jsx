import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginBtn = () => {
    const navigate = useNavigate()
    return (
        <button className='btn login-btn' onClick={() => navigate('/login')}>Login</button>
    )
}

export default LoginBtn