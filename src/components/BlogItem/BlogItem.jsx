import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BlogItem.css';

const BlogItem = ({ newBlog, bookMark }) => {

    let totalTime = 0;
    let title= "";
    
    let style = {
        title: {
            opacity: 0.8,
            padding: '8px',
            backgroundColor: '#ffff',
            boxShadow: '5px 5px 10px 10px rgb(228, 230, 228)',
            borderRadius: '5%',
            margin: '10px',
        }
    }

    for (const blog of newBlog) {
        totalTime = totalTime + blog.spendTime;
        

        // length = length + 1;    
    }
    for (const marked of bookMark) {
        title =title + marked.title;

        // if(title === marked.title){
        //     title = title;
        //     // toast.error("already Bookmarked")
        // }else{
        //     title = marked.title;
        //     // toast.success("Bookmark Added Successfully")
        // }        
    }
       
    

    // if(bookMark === bookMark.length){
    //     toast.success("successfully toasted")
    // }else{
    //     toast.error("Already Exist")
    // }


    // let totalSpendTime = 0;

    // for (const blog of newBlog){
    //     console.log(blog)
    // }

    // totalSpendTime = blog.spendTime + totalSpendTime;

    
    return (
        <div>
            <h3 className='readTime'>Spent time on read : {totalTime} min</h3>
            <ToastContainer />
            <div>
                <h5 className='bookMarked'>Bookmarked Blogs :{bookMark.length}</h5>
                <div  style={style.title }><span>{title} <br /><br /></span><br></br></div>
            </div>

        </div>
    );
};

export default BlogItem;