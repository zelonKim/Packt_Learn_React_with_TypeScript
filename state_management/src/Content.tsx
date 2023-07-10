import { useAppContext } from "./AppContext";

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
