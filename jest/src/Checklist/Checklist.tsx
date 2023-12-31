import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useChecked } from "./useChecked";
import { IdValue } from "./types";
import { isChecked } from "./isChecked";
import { assertValueCanBeRendered } from "./assertValueCanBeRendered";

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data, isChecked: boolean) => ReactNode;
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
} & ComponentPropsWithoutRef<"ul">;


export function Checklist<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  checkedIds,
  onCheckedIdsChange,
  ...ulProps
}: Props<Data>) 
{
  const { resolvedCheckedIds, handleCheckChange } = useChecked({
    checkedIds,
    onCheckedIdsChange,
  });
  
  return (
    <ul className="p-10 bg-gray-300 rounded" {...ulProps}>
      
      {data.map((item) => {
        const idValue = item[id] as unknown; 
        
        assertValueCanBeRendered(idValue);
        
        if (renderItem) {
          return renderItem(item, isChecked(resolvedCheckedIds, idValue)); 
        }

        const primaryText = item[primary] as unknown;
        
        assertValueCanBeRendered(primaryText);
        
        const secondaryText = item[secondary] as unknown;
        
        return (
          <li
            key={idValue}
            className="p-6 mb-4 bg-white rounded shadow last:mb-0"
          >
            <label className="flex items-center">
              
              <input
                type="checkbox"
                checked={isChecked(resolvedCheckedIds, idValue)} // true
                onChange={handleCheckChange(idValue)}
                data-testid={`Checklist__input__${idValue.toString()}`}
              />
              
              <div className="ml-2">
                <div className="pb-1 text-xl text-gray-800"> {primaryText} </div>
                {typeof secondaryText === "string" && (
                  <div className="text-sm text-gray-500"> {secondaryText} </div>
                )}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
