import { useContext } from "react"
import { Center, Image, Skeleton, useColorModeValue, VStack } from "@chakra-ui/react"
import { useAccount } from "wagmi"
import { ethers } from 'ethers';

import { Context } from "../../Context";

import Card from "../Card"
import MintNFT from "./MintNFT";
import NFTInfo from "./NFTInfo";
import NFTLinks from "./NFTLinks";
import SVGieWrapper from "./SVGieWrapper";

const NFT = () => {

    const cardVariant = useColorModeValue('mainShadowLight', 'mainShadowDark')
    // const headingVariant = useColorModeValue('withShadowLight', 'withShadowDark')
    const cardSize = 'xl'

    const { address, isError, isLoading, isConnected } = useAccount()

    const { balance, loadingBalance, owner } = useContext(Context);

    return (
        <>
            <Center w='100%' h='32rem' >
                <VStack >
                    <Card size={cardSize} variant={cardVariant} >
                        {(
                            isLoading ?
                                <Skeleton w={300} h={300}>
                                    <Image w={300} h={300} >Loading SVGie</Image>
                                </Skeleton>
                                : isError ?
                                    <Center align='center' color='#303030' textShadow='0 0 3px #cccccc' p={16}>
                                        Error Loading Account
                                    </Center>
                                    : (!isConnected || !address) ?
                                        <Center align='center' color='#303030' textShadow='0 0 3px #cccccc' p={16}>
                                            Please Connect Wallet to Mint or View your SVGie
                                        </Center>
                                        :
                                        <SVGieWrapper
                                            address={address}
                                            tokenId={ethers.BigNumber.from(address)}
                                        />
                        )}
                    </Card>
                    {(!isLoading && !isError && isConnected && address && !loadingBalance) ?
                        <Center >
                            {(!balance) ?
                                <MintNFT />
                                :
                                <NFTLinks
                                    iconSize={10}
                                    tokenId={ethers.BigNumber.from(address)}
                                />
                            }
                        </Center>
                        :
                        <></>
                    }
                    {(!isLoading && !isError && isConnected && address) ?
                        <NFTInfo /> : <></>
                    }
                </VStack>
            </Center>
        </>
    )

}

export default NFT