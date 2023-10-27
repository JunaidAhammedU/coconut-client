import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
// import axios from "axios";
//-----------------------------------------------


const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('user');
  //   axios.post(process.env.REACT_APP_server_url, { token }).then((response) => {
  //     const data = response.data;
  //     if (data.status) {
  //       if (data.status === -1) {
  //         localStorage.removeItem("user");
  //         navigate('/login')
  //       }
  //       if (data.status === 0) {
  //         navigate('/login')
  //       }
  //     } else {
  //       navigate('/login')
  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  // }, [navigate])


  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
