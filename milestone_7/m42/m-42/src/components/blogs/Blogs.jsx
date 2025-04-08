import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl'>Total Blogs: {blogs.length}</h1>

            <div className="all-blogs grid grid-cols-2 gap-2 m-2">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;