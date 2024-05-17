import { useContext, createContext } from "react";

const MouseEnterContext = createContext(undefined);


const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
      throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};

export default useMouseEnter;