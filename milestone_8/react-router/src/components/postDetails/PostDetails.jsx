import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;

    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;