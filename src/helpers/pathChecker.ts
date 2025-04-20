export const useActivePath = (currentPath: string, targetPath: string) => {
  return currentPath.toLowerCase().includes(targetPath.toLowerCase());
};
