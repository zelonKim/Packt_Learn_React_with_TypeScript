import { FieldError } from "react-hook-form";

type Props = {
  fieldError: FieldError | undefined;
};

export function ValidationError({ fieldError }: Props) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" className="mt-1 text-xs text-red-500">
      {" "}
      {fieldError.message}{" "}
    </div>
  );
}
