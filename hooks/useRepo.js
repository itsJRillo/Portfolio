import { useContext } from "react";
import PortfolioContext from "../context/PortfolioProvider";

const useRepo = () =>{
    return useContext(PortfolioContext)
}

export default useRepo;