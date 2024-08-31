import useFetchData from "../hooks/useFetchData"


const Category = () => {
    const [ categories ] = useFetchData({
        endpoint: 'https://fakestoreapi.com/products/categories'
    })
  return (
    <div>
        <ul>
            {
                categories?.map((item, id) => {
                    return (
                        <li key={id}>
                            <a>{item}</a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Category