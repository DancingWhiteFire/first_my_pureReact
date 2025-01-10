import { useSelector } from "react-redux";

export const PermissionRoleHook = (type) => {
  const { permissions } = useSelector((state) => state.auth.user);
  const result = permissions.split(",").includes(type);
  return result;
};
