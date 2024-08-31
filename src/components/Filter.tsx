import { useState } from "react"
import useFetchData from "../hooks/useFetchData"
import { CardProps } from "../interfaces/CardProps"
import Card from "./Card"

const Filter = () => {
    const [category, setCategory] = useState<string>('')
    const [ categories ] = useFetchData({
        endpoint: 'https://fakestoreapi.com/products/categories'
    })
    const [products] = useFetchData({
        endpoint: 'https://fakestoreapi.com/products'
    })
    const handleFilter = (category: string = '') => {
        setCategory(category)
    }

  return (
    <>
        <div className="flex justify-center m-8">
            <ul className="flex flex-row gap-4">
                <li>
                    <button 
                        onClick={() => handleFilter('')}
                        className="bg-blue-300"
                    >
                        all
                    </button>
                </li>
                {
                    categories?.map((item, id) => {
                        return (
                            <li key={id}>
                                <button 
                                    onClick={() => handleFilter(item)}
                                    className="bg-blue-300"
                                >
                                    {item}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div
            className='flex flex-wrap justify-center mx-16 my-8 gap-8'
        >
                {
                    products?.map((item: CardProps, key) => {
                        if (category === item.category || category === '') {
                            return (
                                < Card
                                    key={key}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    description={item.description}
                                    image={item.image}
                                />
                            )
                        }
                    })
                }
        </div>
    </>
  )
}

export default Filter