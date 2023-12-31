import React, { useEffect, useState } from 'react';
import './Home.css';
import Blogs from '../Blogs/Blogs';
import BlogItem from '../BlogItem/BlogItem';
import { addToDb } from '../../utilities/fakeDb';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState([]);
    const [bookMark, setBookMark] = useState([])

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleRead = (blog) =>{        
        const newBlogItem = [...newBlog, blog]
        setNewBlog(newBlogItem)
        addToDb(blog.id)
    }

    const handleBookedMark =(marked) =>{
        const newBookedMark = [...bookMark, marked]
        setBookMark(newBookedMark)
    }
    return (
        <div className='home'>
            <div className='main-content'>
                {
                    blogs.map(blog => <Blogs blog={blog} key={blog.id} handleRead={handleRead} handleBookedMark = {handleBookedMark} />)
                }
            </div>
            <div className='side-content'>
                <BlogItem newBlog = {newBlog} bookMark={bookMark}></BlogItem>
            </div>
        </div>
    );
};

export default Home;