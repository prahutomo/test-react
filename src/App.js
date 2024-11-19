import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Routes, Route, Link } from "react-router-dom";
import {Header} from "./Header"

import './App.css';


const App = () => (
  <Container className="p-3">
    <Header/>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Container>
  
);



function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
