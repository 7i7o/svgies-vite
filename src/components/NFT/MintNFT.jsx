import { Button, useToast } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import {
    useContractWrite,
    useWaitForTransaction,
    useAccount,
} from 'wagmi'
import { ethers } from "ethers"
import { Context } from '../../Context'
import { useState } from 'react'
import { coinName } from '../../constants/constants'

const MintNFT = () => {
    const { addressOrName, contractInterface, balance, mintActive, mintPrice } = useContext(Context)
    const { address } = useAccount()
    const toast = useToast()

    // const overrides = { value: mintPrice }
    const [minting, setMinting] = useState(false);

    const { data, error, isError, write } =
        useContractWrite({ addressOrName, contractInterface, functionName: 'safeMint' })
    // useContractWrite({ addressOrName, contractInterface, functionName: 'safeMint', args: [address], overrides })

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    const reloadPage = () => {
        window.location.reload(false)
    }

    /** Message for Mint Starting **/
    useEffect(() => {
        if (!isLoading) return;
        toast({ title: `Minting...`, status: 'info', isClosable: true, })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    /** Message for Mint Successful **/
    useEffect(() => {
        if (!isSuccess) return;
        console.log(`Successfully Minted SVGie!`)
        toast({ title: `Mint Successful! Check you wallet for transaction confirmation`, status: 'success', isClosable: true, })
        setMinting(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess])

    /** Message for Mint Error **/
    useEffect(() => {
        if (!error) return
        toast({ title: `Mint Failed, please check console`, status: 'error', isClosable: true, })
        console.log(`Mint Error: ${JSON.stringify((error)?.message)}`)
        setMinting(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isError])

    const safeMint = () => {
        setMinting(true);
        write({
            recklesslySetUnpreparedArgs: [address],
            recklesslySetUnpreparedOverrides: { value: mintPrice },
        })
    }
    /** Component **/
    return (
        <div>
            {(!balance && !isSuccess) &&
                <Button
                    colorScheme='blue'
                    disabled={!write || isLoading || minting}
                    onClick={safeMint}
                    isLoading={isLoading || minting}
                    loadingText={`Minting...`}
                >
                    {`${mintActive ? (mintPrice ? (mintPrice > 0 ? `Mint (${ethers.utils.formatEther(mintPrice)} ${coinName})` : 'FREE MINT') : 'Free Mint') : 'Mint (SOON)'}`}
                </Button>
            }
            {isSuccess &&
                <Button
                    mx={2}
                    colorScheme='blue'
                    onClick={reloadPage}
                >
                    Reload to reveal
                </Button>
            }
        </div>
    )
}

export default MintNFT