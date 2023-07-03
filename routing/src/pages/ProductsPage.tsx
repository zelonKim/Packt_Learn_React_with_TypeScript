import { products } from '../data/products'

export function ProductsPage() {
    return (
        <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-slate-600">
                Here are some great tools for React
            </h2>

            <ul className="p-0 m-0 list-none">
                {products.map((product) => (
                    <li key={product.id} className="p-1 text-base text-slate-800">
                        {product.name}    
                    </li>
                ))}
            </ul>
        </div>
    )
}

