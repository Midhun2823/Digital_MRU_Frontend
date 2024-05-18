import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import { useNavigate } from "react-router-dom";
import LatestEvents from '../../Components/LatestEvents/LatestEvents';

const Home = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, []);

  return (
    <div>
      <Header />
      <LatestEvents/>
    </div>
  )
}

export default Home
