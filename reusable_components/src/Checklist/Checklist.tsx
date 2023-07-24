import { ComponentPropsWithoutRef } from "react"; 
// allows to reference the props of an HTML element
// a generic type that takes the HTML element name as a generic parameter

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
} & ComponentPropsWithoutRef<'ul'>
// intersect the props type with 'ComponentPropsWithoutRef' to add props for the HTML element we want to spread onto

  
export function Checklist<Data>({ data, id, primary, secondary, ...ulProps }: Props<Data>) {
  return (
    <ul className="p-10 bg-gray-300 rounded" {...ulProps}>
      {data.map((item) => {
        const idValue = item[id] as unknown;
        if (typeof idValue !== "string" && typeof idValue !== "number") {
          return null;
        }

        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== "string") {
          return null;
        }

        const secondaryText = item[secondary] as unknown;

        return (
          <li
            key={idValue}
            className="p-6 mb-4 bg-white rounded shadow last:mb-0"
          >
            <div className="pb-1 text-xl text-gray-800"> {primaryText} </div>

            {typeof secondaryText === "string" && (
              <div className="text-sm text-gray-500"> {secondaryText}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

