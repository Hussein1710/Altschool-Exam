import React from "react";
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Signup from './components/Signup'
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';
import User from './components/User';
import Login from './components/Login'
export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://randomuser.me/api/?results=50`);
        if(!res.ok){
          throw new Error("something went wrong")
        }
        const data = await res.json();

        setData(data.results);
        console.log(data.results)
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
      // console.log(data)
    };

    fetchData();
    return () => { };
  }, []);

  const indexOfLastPost = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastPost - userPerPage;
  const currentPages = data.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div>
              <Routes>
          
          <Route path='/' element={<Home />} />

          <Route path='Signup' element={<Signup />}/>
          <Route path='Login' element={<Login />}/>

          <Route path='User' element={<User data={currentPages} loading={loading} />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
        <Pagination userPerPage={userPerPage} totalPage={data.length}/>
    </div>
  );
}
