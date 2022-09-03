
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Alert from './components/Alert'



      function App() {

        const now = new Date();
        const [message, setMessage] = useState(null);
        const [category, setCategory] = useState(null);


        const flashMessage = (message, category) => {
          setMessage(message)
          setCategory(category)
        }


        return (
          <>
              <Navbar/>
              <div className='container'>

                      <Routes>

                      <Route path='/signup' element={<Signup flashMessage={flashMessage}/>} />


                        
                      </Routes>
                
              </div>
          
          </>
          
        );
      }

export default App;
