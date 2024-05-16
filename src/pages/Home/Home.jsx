import React from 'react'
import Header from '../../Components/Header/Header'
import { Navigate } from 'react-router-dom';

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
