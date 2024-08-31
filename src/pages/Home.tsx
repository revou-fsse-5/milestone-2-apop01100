import Navbar  from '../components/Navbar';
import Filter from '../components/Filter';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate()
  const userAccess = localStorage.getItem('tokenAccess')
  console.log(userAccess)

  useEffect(() => {
    if (userAccess === null)
      navigate('login')

  }, [userAccess])

  return (
    <>
      <Navbar />
      <Filter />
    </>
  )
}

export default Home
