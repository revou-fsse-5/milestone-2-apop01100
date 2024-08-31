import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface CartItems {
    title: string
    price: string
    description: string
    image: string
    total: number
}

const ShoppingCart = () => {
    const [show, setShow] = useState<boolean>(false)
    const keys: string[] | null = Object.keys(localStorage) || null

    const handleRemove = (key: string) => {
        localStorage.removeItem(`${key}-item`)
        localStorage.removeItem(`${key}-quantity`)
        localStorage.setItem('total', `${Number(localStorage.getItem('total')) - Number(localStorage.getItem(`${key}-quantity`))}`)
    }

  return (
    <>
        <div className="flex items-center justify-center px-8">
            <button 
                onClick={() => setShow(!show)} 
                className="flex flex-col justify-center items-center bg-transparent px-2 rounded-full text-black hover:text-gray-500 border-blue-500"
            >
                <FontAwesomeIcon icon={faCartShopping} className="fa-lg"/>
            </button>
        </div>
        {
            show && (
                <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto fixed sticky-0 z-50">
                    <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div 
                            className="flex md:flex-row flex-col justify-end"
                            onClick={() => setShow(!show)}
                        >
                            <div 
                                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                            >
                                <p className="text-3xl font-black leading-10 text-gray-800">
                                    Your Shopping Bag!
                                </p>
                                {
                                    keys.map((key, id) => {
                                        if (/^[0-9]{1,3}-item/.test(key)) {
                                            const cartItems: CartItems = JSON.parse(localStorage.getItem(key) || '[]')

                                            return (
                                                <div 
                                                    className="flex flex-row justify-around items-center mt-2 py-8 border-t border-gray-200 gap-5"
                                                    key={id}
                                                >
                                                    <div className="w-1/4">
                                                        <img 
                                                            src={cartItems.image}
                                                            className="w-full h-full object-center object-cover rounded-xl" 
                                                        />
                                                    </div>
                                                    <div 
                                                        className="h-full flex flex-col justify-center items-center gap-8"
                                                    >
                                                        <p 
                                                            className="text-xs leading-3 text-gray-800 md:pt-0 pt-4"
                                                        >
                                                            {cartItems.title}
                                                        </p>
                                                        <p 
                                                            className="w-96 text-xs leading-3 text-gray-600"
                                                        >
                                                            {cartItems.description}
                                                        </p>
                                                    </div>
                                                    <div 
                                                            className="flex flex-col gap-8"
                                                        >
                                                            <p 
                                                                className="text-base font-black leading-none text-gray-800"
                                                            >
                                                                $ {
                                                                    Number(cartItems.price) * cartItems.total
                                                                }
                                                            </p>
                                                            <p 
                                                                className="text-xs leading-3 cursor-pointer"
                                                                onClick={() => handleRemove(key)}
                                                            >   

                                                                {cartItems.total > 1 ? <>{cartItems.total} items </> : <>{cartItems.total} item </>}
                                                            </p>
                                                        </div>
                                                </div>
                                            )
                                        } 
                                        
                                    })
                                
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default ShoppingCart