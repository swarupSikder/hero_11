import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.name);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('form submitted!');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' type="text" /> <br />
                <input name='email' type="email" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;