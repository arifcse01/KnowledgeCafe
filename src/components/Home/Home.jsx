import React, { useEffect, useState } from 'react';
import './Home.css';
import Blogs from '../Blogs/Blogs';
import BlogItem from '../BlogItem/BlogItem';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleRead = (blog) =>{        
        const newBlogItem = [...newBlog, blog]
        setNewBlog(newBlogItem)
    }
    return (
        <div className='home'>
            <div className='main-content'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id} handleRead={handleRead} />)
                }
            </div>
            <div className='side-content'>
                <BlogItem newBlog = {newBlog}></BlogItem>
            </div>
        </div>
    );
};

export default Home;