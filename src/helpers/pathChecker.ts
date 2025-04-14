// helpers/pathChecker.ts
import { useLocation } from "react-router-dom";

export const ActivePath = (path: string) => {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  return pathname.includes(path.toLowerCase());
};
