import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> d3b66f1eb41195d5f20bdc343b4aac225c60bf99

const Home = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, []);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
