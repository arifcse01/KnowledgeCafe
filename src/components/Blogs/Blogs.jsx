import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookOpenReader, faBookReader, faCoffee, faFaceAngry, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import "./Blogs.css"


const Blogs = (props) => {
    const { img, title, name, id, date, spendTime } = props.blog;
    
    const handleRead = props.handleRead;

    return (
        <div className='cart-item'>
            <div className='cart'>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <div className='cart-info'>
                    <div className='profile'>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <h4>{name}</h4>
                            <p className='date'>{date}</p>
                        </div>
                    </div>
                    <div><p> {spendTime} <FontAwesomeIcon className='icon' icon = {faBookBookmark}></FontAwesomeIcon></p></div>
                </div>
                <span>#Beginer </span>
                <span> #Programmer</span>
                <p><a onClick={() => handleRead(props.blog)} href="#">mark as a read</a></p>
            </div>
        </div>
    );
};

export default Blogs;