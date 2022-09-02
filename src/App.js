import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom';


      function App() {


        return (
          <>
              <Navbar/>
              <div className='container'>

                      <Routes>

                      <Route path='/signup' element={<Signup/>} />


                        
                      </Routes>
                
              </div>
          
          </>
          
        );
      }

export default App;
