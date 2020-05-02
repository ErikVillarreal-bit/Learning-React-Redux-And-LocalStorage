import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


/* Components */
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
function App() {
  const url = window.location.pathname;
  if(url === '/home'){
    return (
      <>
      <Router>
        <Navbar logout="Log Out"/>
        <Route path="/" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Footer/>
      </Router>
      </>
    );
  }else{
    return (
      <>
      <Router>
        <Navbar/>
        <Route path="/" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Footer/>
      </Router>
      </>
    );
  }
}

export default App;
