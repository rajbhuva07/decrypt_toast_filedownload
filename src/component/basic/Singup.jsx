import React, { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!", { email, password });
        handleClear();
    };

    const handleClear = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email" 
                        required
                        aria-label="Email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        aria-label="Password"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default SignupPage;
