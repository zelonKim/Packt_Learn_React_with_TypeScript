/* import { useAppContext } from "./AppContext";

export function Content() {
  const { permissions } = useAppContext();

  if (permissions === undefined) {
    return null;
  }
  return permissions.includes("admin") ? (
    <p>Some important stuff that only an admin can do</p>
  ) : (
    <p>Insufficient Permissions</p>
  );
}
 */
////////////////////


import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export function Content() {
  const  permissions  = useSelector(
    (state: RootState) => state.user.permissions
  );

  if (permissions === undefined) {
    return null;
  }
  return permissions.includes("admin") ? (
    <p>Some important stuff that only an admin can do</p>
  ) : (
    <p>Insufficient Permissions</p>
  );
}
