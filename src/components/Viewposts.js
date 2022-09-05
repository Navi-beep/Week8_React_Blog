import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'


export default function ViewPosts(props) {
    


    //let navigate = useNavigate();

    const [posts, setPosts] = useState([]);

      useEffect(() => {
            fetch(`https://kekambas-blog.herokuapp.com/blog/posts`)
            .then(res => res.json())
            .then(data => {
                let postyPosts = data;
                setPosts(postyPosts)
            })
    }); 




    return(
        <>
        
            <h2 className="text-center">View the posts!</h2>
            {posts.map((post, idx) => {
                <div className="card" key={idx}>
                    <div className="card-body">
                        <h5 className="card-title">User={post['author']['username']}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Title={post['title']} </h6>
                        <h6 className="card-subtitle mb-2 text-muted">Date Posted:{post['author']['date_created']} </h6>
                        <p className="card-text">{post['content']}</p>
                    </div>
                </div>
            
            })}
        </>

    )

}
