import './App.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

{
  /* <p>{users.length}</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            <br />
            {user.age}
          </li>
        ))}
      </ul>
      // const [users, setUser] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('/api/getAll')
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
    */
}
