import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'


export default function ViewPosts(props) {
    //this does not work!!!!


    //let navigate = useNavigate();

    const [posts, setPosts] = useState([]);

      useEffect(() => {
            fetch(`https://kekambas-blog.herokuapp.com/blog/posts`)
            .then(res => res.json())
            .then(data => { 
                setPosts(data)});
    }, []); 


    return(
        <>
            
            {posts.map((post, idx) => 
                
                <div className=" row mt-3 w-75 card text-center justify-content-center bg-dark" key={idx}>
                    <div className="card-body">
                        <h5 className="card-title text-light">User: {post['author']['username']}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Title: {post['title']} </h6>
                        <h6 className="card-subtitle mb-2 text-muted">Date Posted: {post['author']['date_created']} </h6>
                        <p className="card-text text-light">{post['content']}</p>
                    </div>

                    
                </div>
                
        
            )}

            
        </>

    )

}
