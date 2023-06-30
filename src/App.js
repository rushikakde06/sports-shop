// import logo from './logo.svg';

import './App.css';
import Logo from './Componets/Logo';
// import Carousels from './Componets/Carousels';
import { Route, Routes } from 'react-router-dom';
import Productdetail from './Componets/Productdetail';
import Addproduct from './Componets/Addproduct';
import Footer from './Componets/Footer';
import Contact from './Componets/Contact';
// import Feedback from './Componets/Feedback';
// import Itemproduct from './Componets/Itemproduct';
import Home from './Componets/Home';
import Gallery from './Componets/Gallery';
import Services from './Componets/Services';
import About from './Componets/About';
import Loginform from './Componets/Loginform';
import PrivateRoute from './Componets/PrivateRoute';
import Signup from './Componets/Signup';
import { Provider } from 'react-redux';
import store from './Store/store'
import Feedback2 from './Componets/Feedback2';
// import Feedbackadd from './Componets/Feedbackadd';

// import Editproduct from './Componets/Editproduct';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Logo />
      <Routes>
        {/* Add product detail page */}
        <Route path='product' element={<Productdetail />}>
        </Route>
        <Route path='addproduct' element={<Addproduct />}>
        </Route>
        
       


        {/* <Route path='edit/:id' element={<Editproduct/>}> </Route> */}
        {/* Add contact page */}
        <Route path='feedback' element={<Contact />}>
        </Route>
        {/* Add feedback page */}
        {/* <Route path='ufeedback' element={<Feedback />}> </Route> */}
        <Route path='feedback2' element={<Feedback2/>}></Route>
        {/* <Route path='addfeedback' element={<Feedbackadd/>}></Route> */}
        {/* add home page */}
        <Route path='' element={<Home />}></Route>
        {/* <Route path='car' element={<Carousels />}> </Route> */}
    
        {/* add gallery */}
        {/* <Route path='gallery' element={<Gallery />}></Route> */}
        {/* add service */}
        <Route path='ser' element={<Services />}></Route>
        {/* add about js */}
        {/* <Route path='about' element={<About/>}></Route> */}

        <Route path='login' element={<Loginform/>}></Route>

        <Route path='sign' element={<Signup/>}></Route> 
        <Route path='gallery' element={<PrivateRoute component={<Gallery/>} />}/>
        <Route path='about' element={<PrivateRoute component={<About/>} />}/>

     
      {/* <Carousels /> */}
      {/* <Itemproduct/> */}

      {/* <Route path='' element={<Itemproduct />}></Route> */}

      </Routes>
      <Footer />
    
    </div>
    </Provider>
  );
}

export default App;
