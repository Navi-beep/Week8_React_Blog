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
                let postyPosts = data;
                setPosts(postyPosts)
            })
    }); 




    return(
        <>
        
            <h2 className="text-center">View the posts!</h2>

            <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-dark">Edit</a>
                    <a href="#" class="btn btn-danger m-2">Delete</a>
                    
                </div>
            </div>

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
