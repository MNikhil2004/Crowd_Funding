// // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Login from './components/login/Login';
// import Form from './components/nikhil/form';
// import Donor from './components/donor/donor';
// // import Browse from './components/browsing/browse'
// import Body from './components/body/Body';
// import Header from './components/header/Header';
// // import { Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';


// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//    <Routes>
//     <Route path="/" element={<Header />}></Route>
//     {/* <Route  path="/body" element={<Body />}></Route> */}
//     <Route path="/login" element= {<Login/>}></Route>
//     <Route path="/form" element={<Form />}></Route>
//     <Route path="/donor" element={<Donor />}></Route>
//    </Routes>
//    </BrowserRouter>
//    <Body />
//    </div>
//     // <div>
//     //   <Header />
//     //   
//     //   <Login1 />   
//     //   <Donor />
//     //   <Form />
//     //   <Browse />
//     // </div>
//   );
// }
// // import logo from './logo.svg';

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Header from './components/header/Header';
import Body from './components/body/Body';
import Login from './components/login/Login';
import Form from './components/nikhil/form';
import Donor from './components/donor/DonationForm';
import Brouse from './components/browsing/browse';

function App() {
  return (
    <Router>
      <Header /> {/* Header component should be rendered outside of the <Routes> */}
      <Routes>
        <Route path="/" element={<Body />} /> {/* Render Body component on root route */}
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/Brouse" element={<Brouse />} />
      </Routes>
    </Router>
  );
}

export default App;
