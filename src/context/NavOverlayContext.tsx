import { createContext, useState } from "react";

type NavContextProps = {
  open: boolean;
  updateOpen: () => void;
};
export const NavContext = createContext<NavContextProps>({
  open: false,
  updateOpen: () => null,
});

interface NavContextProviderProps {
  children: React.ReactNode;
}

export default function NavContextProvider({
  children,
}: NavContextProviderProps) {
  const [open, setOpen] = useState<boolean>(false);

  const updateOpen = () => {
    setOpen(!open);
  };
  return (
    <NavContext.Provider value={{ open, updateOpen }}>
      {children}
    </NavContext.Provider>
  );
}
