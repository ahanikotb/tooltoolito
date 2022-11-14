import { useEffect, useState } from "react";
import toolList from "../Components/Tools/tools.json";

export function copyToClipboard(text: any) {
  navigator.clipboard.writeText(text);
}

export const useClientsideload = () => {
  const [loadComponent, setLoadComponent] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") setLoadComponent(true);
  }, [loadComponent]);
  return loadComponent;
};

export const getAllTools = (): any => {
  return toolList;
};
