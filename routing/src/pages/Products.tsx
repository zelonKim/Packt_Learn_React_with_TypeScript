import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'

export function Products() {
    const [searchParams] = useSearchParams()  
  
    function getFilteredProducts() {
        const search = searchParams.get('search')
        if (search === null || search === "") {
            return products;
        } else {
            return products.filter( (product) => product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        }
      }
      
    return (
        <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-slate-600">
                Here are some great tools for React
            </h2>

            <ul className="p-0 m-0 list-none">
                {getFilteredProducts().map((product) => (
                    <li key={product.id}
                        className="p-1 text-base text-slate-800"
                    > 
                        <Link
                        to={`${product.id}`}
                        className="p-1 text-base text-slate-800 hover:underline">
                        {product.name}    
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}