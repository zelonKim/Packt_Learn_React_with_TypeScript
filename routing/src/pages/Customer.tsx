import { NavLink, Outlet, Params, useParams } from "react-router-dom";

export function Customer() {
  const params = useParams<Params>();
  console.log(params.id); // URL이 http://localhost:3000/customer/123 일경우, 콘솔창에 {id: '123'}이 출력됨.

  return (
    <>
      <div>Customer</div>
      <nav>
        <NavLink to="profile"> Profile </NavLink>
        <NavLink to="history"> History </NavLink>
        <NavLink to="tasks"> Tasks </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
