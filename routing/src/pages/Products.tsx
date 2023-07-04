import { Link } from 'react-router-dom'
import { products } from '../data/products'

export function Products() {
    return (
        <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-slate-600">
                Here are some great tools for React
            </h2>

            <ul className="p-0 m-0 list-none">
                {products.map((product) => (
                    <li key={product.id}> 
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