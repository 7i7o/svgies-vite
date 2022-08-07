import React, { useState } from "react";
import { addressOrName } from "./constants/contract";
import contractABI from "./constants/contractABI.json"

export const Context = React.createContext();

const ContextProvider = ({ children }) => {

    const [contractRead, setContractRead] = useState()
    const [contractWrite, setContractWrite] = useState()
    const [mintActive, setMintActive] = useState()
    const [mintPrice, setMintPrice] = useState()
    const [balance, setBalance] = useState()
    const [loadingBalance, setLoadingBalance] = useState(true)
    const [owner, setOwner] = useState()
    const contractInterface = contractABI.abi

    return (
        <Context.Provider
            value={{
                addressOrName, contractInterface,
                contractRead, setContractRead,
                contractWrite, setContractWrite,
                mintActive, setMintActive,
                mintPrice, setMintPrice,
                balance, setBalance,
                loadingBalance, setLoadingBalance,
                owner, setOwner,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider