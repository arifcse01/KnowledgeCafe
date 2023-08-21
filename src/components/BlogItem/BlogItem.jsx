import React from 'react';

const BlogItem = ({ newBlog }) => {
    

    let totalSpendTime = 0;

    for (const blog of newBlog){
        console.log(blog)
    }

    totalSpendtime = blog.spendTime + totalSpendTime;
    return (
        <div>
            <h2>Spent time on read : </h2>
            <h5>{title}</h5>
        </div>
    );
};

export default BlogItem;