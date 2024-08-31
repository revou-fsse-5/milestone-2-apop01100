import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

const Navbar = () => {

    const handleLogout = () => {
        localStorage.clear()
    }

  return (
    <nav className='w-full bg-white shadow-xl py-3 px-0'>
        <div className='flex justify-between items-center'>
            <div className='text-black px-8'>
                Toko Onlen
            </div>
            <ul className='flex justify-between items-center space-x-20'>
                <li>
                    <Link to='/' className='text-black hover:text-gray-400'>
                        Category
                    </Link>
                </li>
                <li>
                    <Link to='/register' className='text-black hover:text-gray-400'>
                        Register
                    </Link>
                </li>
                <li>
                    <Link to='/login' onClick={handleLogout} className='text-black hover:text-gray-400'>
                        Logout
                    </Link>
                </li>
            </ul>
            <ShoppingCart />
        </div>
    </nav>
  )
}

export default Navbar