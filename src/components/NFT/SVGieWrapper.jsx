import { Center, VStack, Text } from '@chakra-ui/react'

import { useContext, useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import SVGie from './SVGie';
import { Context } from '../../Context';
import SVGies from '../avatar/SVGies';

const previewSize = 200

const SVGieWrapper = (props) => {

    const { address, tokenId } = props
    const { addressOrName, contractInterface, balance, setBalance, loadingBalance, setLoadingBalance } = useContext(Context);

    const [tokenIdBuffer, setTokenIdBuffer] = useState()

    const { data: userBalance, error: errorBalance, isError: isErrorBalance, isLoading: isLoadingBalance } =
        useContractRead({ addressOrName, contractInterface, functionName: 'balanceOf', args: address, enabled: true })

    useEffect(() => {
        if (isLoadingBalance) {
            if (!loadingBalance) setLoadingBalance(true)
            return
        }

        if (isErrorBalance) {
            console.log(errorBalance)
            return
        }

        // console.log(`balanceOf ${address} is ${userBalance.toNumber()}`)

        setBalance(userBalance.toNumber())
        setLoadingBalance(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userBalance, isErrorBalance, isLoadingBalance]);

    useEffect(() => {
        if (loadingBalance) return
        if (tokenId !== tokenIdBuffer)
            setTokenIdBuffer(tokenId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [balance, loadingBalance])

    /** Set loading balance to false on component reload **/
    // useEffect(() => {
    //     setLoadingBalance(true)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return <>
        {(loadingBalance) ?
            <Center align='center' color='#303030' textShadow='0 0 3px #cccccc'>
                Loading...
            </Center >
            : (!tokenIdBuffer) ?
                <Center align='center' color='#303030' textShadow='0 0 3px #cccccc'>
                    Loading...
                </Center >
                : !balance ?
                    <Center align='center' color='#303030' textShadow='0 0 3px #cccccc' >
                        <VStack>
                            <Text>No SVGie in your wallet! 😢</Text>
                            <SVGies address={address} width={previewSize} height={previewSize} />
                            <Text>Do you want to mint <strong>yours</strong>?</Text>
                        </VStack>
                    </Center>
                    :
                    <SVGie
                        address={address}
                        tokenId={tokenIdBuffer}
                        fetchOnLoad={!loadingBalance}
                        // contractInfo={contractInfo}
                        balance={balance}
                    />
        }
    </>

}

export default SVGieWrapper;