import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './login.scss';


async function loginUser(credentials) {
    return fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': 'Content-Type, Authorization',
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <>
            <div className="login">
                <div className="session">
                    <div className="left">
                    </div>
                    <form onSubmit={handleSubmit} className="log-in" autoComplete="off">
                        <h4>We are <span>NUVA</span></h4>
                        <p>Welcome back! Log in to your account to view today's clients:</p>
                        <div className="floating-label">
                            <input placeholder="Email" type="text" name="email" id="email" autoComplete="off"
                                   onChange={e => setUserName(e.target.value)}/>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className="floating-label">
                            <input placeholder="Password" type="password" name="password" id="password"
                                   autoComplete="off" onChange={e => setPassword(e.target.value)}/>
                            <label htmlFor="password">Password:</label>
                        </div>
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>

        </>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}