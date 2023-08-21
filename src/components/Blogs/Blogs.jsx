import React from 'react';

const Blogs = ({ blog }) => {
    const {img, title, name, id, date} = blog;
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Blogs;