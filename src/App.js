
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Alert from './components/Alert'
import Login from './components/Login'
import Createpost from './components/Createpost'
import Viewposts from './components/Viewposts'
import kitty from './kitty.jpeg'

//logout doesn't work yet

      function App() {

        const now = new Date();
        const [message, setMessage] = useState(null);
        const [category, setCategory] = useState(null);
        const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true:false)



        const flashMessage = (message, category) => {
          setMessage(message)
          setCategory(category)
        }

        const login = () => {
          setLoggedIn(true)
        }

        const logout = () => {
          localStorage.removeItem('token');
          localStorage.removeItem('expiration');
          setLoggedIn(false)
        }

        return (
          <>
              <Navbar name="Dingus" loggedIn={loggedIn} logout={logout}/>
              <div className='container'>
                {message ? <Alert message={message} category={category} flashMessage={flashMessage} /> :null}
                {loggedIn ? <h2> You are logged in!! </h2> : <h2>You are logged out!</h2>}

                      <div className="kitty text-center">
                      <img className="cat border border-dark border-2 rounded-pill" src={kitty} alt="cat"/>
                      </div>

                      <Routes>

                      <Route path='/signup' element={<Signup flashMessage={flashMessage}/>} />

                      <Route path='/login' element={<Login flashMessage={flashMessage} login={login}/>} />


                      <Route path='/createpost' element={<Createpost flashMessage={flashMessage} loggedIn={loggedIn}/>} />

                      <Route path='/viewposts' element={<Viewposts flashMessage={flashMessage} loggedIn={loggedIn}/>} />

                        
                      </Routes>
                
              </div>
          
          </>
          
        );
      }

export default App;

//tuxedo cat photo - https://www.pexels.com/photo/photo-of-a-black-and-white-cat-looking-up-7725952/