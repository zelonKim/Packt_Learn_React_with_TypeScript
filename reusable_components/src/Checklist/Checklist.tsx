/* import { ComponentPropsWithoutRef } from "react"; 
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
 */

/////////////////////////


/* 
import { ComponentPropsWithoutRef, ReactNode } from "react"; 

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data) => ReactNode;
} & ComponentPropsWithoutRef<'ul'>

  
export function Checklist<Data>({ data, id, primary, secondary, renderItem , ...ulProps }: Props<Data>) {
  return (
    <ul className="p-10 bg-gray-300 rounded" {...ulProps}>
      
      {data.map((item) => {
         if (renderItem) { // if renderItem has been specified, call it with the data item, and return its result from the mapping function
          return renderItem(item)
        } 
      }
      )}
    </ul>
  );
} */


////////////////////////


import { ComponentPropsWithoutRef } from "react"; 
import { useChecked } from './useChecked'

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
} & ComponentPropsWithoutRef<'ul'> 


export function Checklist<Data>({ data, id, primary, secondary, ...ulProps }: Props<Data>) {
  const { checkedIds, handleCheckChange } = useChecked();
  
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
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checkedIds.includes(idValue)}
                onChange={handleCheckChange(idValue)}  
            />
              <div className="ml-2">
              
                <div className="pb-1 text-xl text-gray-800"> {primaryText} </div>
                
                {typeof secondaryText === "string" && (
                  <div className="text-sm text-gray-500"> {secondaryText}</div>
                )}
                
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}


