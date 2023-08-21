import React, { useEffect, useState } from 'react';
import './Home.css';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='home'>
            <div className='main-content'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id} />)
                }
            </div>
            <div className='side-content'>
                <h2>Spent time on read :</h2>
            </div>
        </div>
    );
};

export default Home;