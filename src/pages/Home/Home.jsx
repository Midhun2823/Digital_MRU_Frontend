import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import { useNavigate } from "react-router-dom";
import LatestEvents from '../LastestEvents/LatestEvents';
import PopularEvents from '../PopularEvents/PopularEvents';


const Home = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, []);

  return (
    <div>
      <Header />
      <LatestEvents/>
      <PopularEvents/>
    </div>
  )
}

export default Home
