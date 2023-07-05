import { useParams, Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";


type Params = {
  id: string;
};


export function ProductsPage() {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : parseInt(params.id);

  const product = products.find((product) => product.id === id);
  console.log(product); // URL이 http://localhost:3000/products/2일 경우, 콘솔창에 {description: 'A library that helps manage state across your app', id: 2, name: 'React Redux', price: 12}이 출력됨.

  return (
    <div className="p-5 text-xl text-center">
        {product === undefined ? (
            <h1 className="text-xl text-slate-900">
                Unknown product
            </h1>
        ) : (
            <>
                <h1 className="text-xl text-slate-900">
                    {product.name}
                </h1>
                <p className="text-base text-slate-800">
                    {product.description}
                </p>
                <p className="text-base text-slate-800">
                    {new Intl.NumberFormat('en-US', {
                        currency: 'USD',
                        style: 'currency',
                    }).format(product.price)}
                </p>
            </>
        )}
        </ div>
     )
    }

