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

/* import { FormEvent } from "react";
import { NavLink, Link, useSearchParams, useNavigate } from "react-router-dom";
import logo from "./logo.svg";

export function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    //setSearchParams({ search });
    navigate(`?search=${search}`);
  }

  return (
    <header className="h-40 p-5 text-center text-slate-50 bg-slate-900">
      <form className="relative text-right" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={searchParams.get("search") ?? ""}
          className="absolute top-0 right-0 px-3 py-2 text-gray-700 rounded"
        />
      </form>

      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>

      <Link to="">
        <h1 className="text-2xl"> React Tools </h1>
      </Link>

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
 */

///////////////////////

import { FormEvent } from "react";
import { NavLink, Link, useSearchParams, Form } from "react-router-dom";
import logo from "./logo.svg";

export function Header() {
  const [searchParams] = useSearchParams();

  // search parameter will automatically be added to the URL and action
  return (
    <header className="h-40 p-5 text-center text-slate-50 bg-slate-900">
      <Form className="relative text-right" action="/">
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={searchParams.get("search") ?? ""}
          className="absolute top-0 right-0 px-3 py-2 text-gray-700 rounded"
        />
      </Form>

      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>

      <Link to="">
        <h1 className="text-2xl"> React Tools </h1>
      </Link>

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
