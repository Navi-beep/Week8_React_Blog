import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom';


      function App(props) {


        return (
          <>
              <Navbar name="Peanut"/>
              <div className='container'>

                      <Routes>

                      <Route path='/signup' element={<Signup/>} />


                        
                      </Routes>
                
              </div>
          
          </>
          
        );
      }

export default App;
