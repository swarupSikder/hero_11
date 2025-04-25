import React, { useRef } from 'react';

const UnControlledField = () => {
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name='email' placeholder='Email' /> <br />
                <input type="password" name='password' placeholder='Password' /> <br />
                <input type="submit" value='Submit' />
            </form>

            {/* <p style={{color: 'red'}}><small>{error}</small></p> */}
        </div>
    );
};

export default UnControlledField;