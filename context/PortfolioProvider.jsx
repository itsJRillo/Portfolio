import axios from "axios";
import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext()

const PortfolioProvider = ({children}) => {

    const [repos, setRepos] = useState({})

    const consultarApi = async () => {
        try {
            const url = "https://api.github.com/users/itsJRillo/repos"
            const { data } = await axios(url)
            setRepos(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        consultarApi()
    }, []);

    return (
        <PortfolioContext.Provider 
        value={{
            repos
        }}>
        {children}
        </PortfolioContext.Provider>
    )
}

export{
    PortfolioProvider
}

export default PortfolioContext
