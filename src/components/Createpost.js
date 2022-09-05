import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreatePost(props) {
    let navigate = useNavigate();

    const { loggedIn } = props;
    const { flashMessage } = props;

    useEffect(() => {
        if (!loggedIn){
            flashMessage('You must be logged in order to create a post', 'danger');
            navigate('/login')
        }
    }, [loggedIn, flashMessage, navigate])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`)

        let title = event.target.title.value;
        let content = event.target.content.value;
        let data = JSON.stringify({title,content})

        fetch('https://kekambas-blog.herokuapp.com/blog/posts', {
            method: 'POST',
            headers: myHeaders,
            body: data
        })  .then(res => res.json())
            .then(data => {
                if (data.error){
                    flashMessage(data.error, 'danger')
                } else {
                    flashMessage(`The post ${data.title} has been created`, 'success')
                    navigate('/')
                }
            })
    }

    return (
        <>
            <h4 className='text-center'>Create a Post</h4>
            <form onSubmit={handleSubmit}>
                <div className='row  border border-3 bg-info p-5'>
                <div className=' form-group align-content-middle text-center'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' className='form-control text-center' placeholder='Enter Title' />

                    <label htmlFor='content'> Post Content</label>
                    <input type='text' name='content' className='form-control text-center' placeholder='Enter Body' />

                    <input type='submit' className='btn btn-dark w-100 mt-3' value='Create Post' />
                </div>
                </div>
            </form>
        </>
    )
}