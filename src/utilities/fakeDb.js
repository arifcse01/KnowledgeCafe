const addToDb = (blog)=>{
    let blogCart = {};

    const storedCart = localStorage.getItem("blog-cart");
    if(storedCart) {
        blogCart = JSON.parse(storedCart)
    }
    else{
        blogCart = {};
    }

    const value = blogCart[blog];

    if (value){
        const newValue = value + 1;
        blogCart[blog] = newValue;
    }else{
        blogCart[blog] = 1;
    }

    localStorage.setItem("blog-cart", JSON.stringify(blogCart))

    // if(value){
    //     const newValue = parseInt(value) + 1;
    //     localStorage.setItem(blog, newValue)
    // }else{
    //     console.log("added")  
    //     localStorage.setItem(blog, 1)      
    // }
}

export{
    addToDb
}