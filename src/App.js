import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import HomeScreen from './Screens/homeScreen';
import ProductScreen from './Screens/productScreen';
import SignInScreen from './Screens/signInScreen';
import CartScreen from './Screens/cartScreen'
import RegisterScreen from './Screens/registerScreen';

    
      
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
          Green Owl Basket
          </Link>
        </div>
        {/* <div>
          < SearchBar />
        </div> */}
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
      <Routes>
          <Route path= '/' element = {<HomeScreen/>} >
          </Route>
          <Route path ='/product/:id' element = { <ProductScreen/>} />
          <Route path ='/cart' element ={<CartScreen/>}/>
          <Route path ='/signin' element ={<SignInScreen/>}/>
          <Route path ='/register' element ={<RegisterScreen/>}/>
        </Routes>
      </main>
      <footer className="row center">Em Capstone Project</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
  
