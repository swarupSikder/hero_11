import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h1>{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;