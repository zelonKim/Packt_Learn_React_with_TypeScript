import { useRouteError } from "react-router-dom";
import { Header } from "../Header";

export function ErrorPage() {
  const error = useRouteError(); // error variable is of the 'unknown' type

  function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
  } // type predicate function to allow TypeScript to narrow it to work with

  return (
    <>
      <Header />
      <div className="p-5 text-xl text-center">
        <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
        {isError(error) && (
          <p className="text-base text-slate-700">{error.statusText}</p>
        )}
      </div>
    </>
  );
}
