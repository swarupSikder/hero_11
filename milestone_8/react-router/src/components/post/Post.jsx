import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    const postStyle = {
        border: '2px solid blue',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;