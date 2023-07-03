/*
import { Link } from 'react-router-dom'
import logo from './logo.svg'

export function Header() {
    return(
        <header className="h-40 p-5 text-center text-slate-50 bg-slate-900">
            <img src={logo} alt="Logo" className="inline-block h-20" />
            <h1 className="text-2xl"> React Tools </h1>
            <nav>
                <Link
                    to="products"
                    className="p-1 text-white no-underline"
                >
                    Products        
                </Link>
            </nav>
        </header>
    )
} 
*/

////////////////

import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

export function Header() {
  return (
    <header className="h-40 p-5 text-center text-slate-50 bg-slate-900">
      <img src={logo} alt="Logo" className="inline-block h-20" />
      <h1 className="text-2xl"> React Tools </h1>
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 
                    ${isActive ? "border-white" : "border-transparent"}`
          }
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
}
