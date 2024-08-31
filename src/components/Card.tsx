import { CardProps } from '../interfaces/CardProps';
import { useEffect, useState } from 'react';

const Card = ({ id, title, price, description, image }: CardProps) => {
    const [show, setShow] = useState<boolean>(false)
    const [item, setItem] = useState<number>(Number(localStorage.getItem(`${id}-quantity`)) | 0)
    const [totalItems, setTotalItems] = useState<number>(Number(localStorage.getItem(`total`)) | 0)

    useEffect(() => {
        if (item !== 0) {
            localStorage.setItem(`${id}-item`, JSON.stringify({
                title: title,
                price: price,
                description,
                image: image,
                total: item
            }))
            localStorage.setItem(`${id}-quantity`, `${item}`)
            localStorage.setItem(`total`, `${totalItems}`)
        } else {
            localStorage.setItem('total', `${totalItems}`)
            localStorage.removeItem(`${id}-item`)
            localStorage.removeItem(`${id}-quantity`)
        }

    }, [item, totalItems])

    const handleIncreaseItem = () => {
        setShow(!show)
        setItem(item + 1)
        setTotalItems(Number(localStorage.getItem(`total`)) + 1)
    }

    const handleDeacreaseItem = () => {
        setShow(!show)
        setItem(item - 1)
        setTotalItems(Number(localStorage.getItem(`total`)) - 1)
    }


  return (
    <>
        {
            show && (
                <div
                    className="absolute rounded-full bg-red-500 h-5 w-5 top-9 right-8 text-lg"
                >
                    <span>{totalItems}</span>
                </div>
            )
        }
        <div className='flex flex-col justify-between w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div
                className='relative w-96 h-96 my-8 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card'
            >
                <div
                    className='absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0'
                >
                    <img 
                        src={image} 
                        alt={price} 
                        className='w-80 h-96 rounded-lg'
                    />
                </div>
                <div
                    className='inset-0 w-full h-full flex justify-center items-center transition-all z-10 card-back'
                >
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div
                className='flex justify-center mx-3'
                >
                    <p
                        className='text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'
                    >
                        {title}
                    </p>
                </div>
            <div
                className='px-5 pb-5 mt-5 justify-self-end'
            >
                
                <div
                    className='flex items-center justify-between mt-4'
                >
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                    {
                        !item ?
                        <button 
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            onClick={() => handleIncreaseItem()}
                        >
                            Add to Cart
                        </button>
                        :
                        <div className='flex flex-row justify-between items-center gap-5'>
                            <button
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                onClick={() => handleDeacreaseItem()}
                            >
                                -
                            </button>
                            <span 
                                className='text-white'
                            >{
                                item
                            }</span>
                            <button
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                onClick={() => handleIncreaseItem()}
                            >+</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
  );
}

export default Card