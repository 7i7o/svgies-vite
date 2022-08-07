import { Center, Heading, useColorModeValue, VStack } from "@chakra-ui/react"


const PageHeader = (props) => {

    const variant = useColorModeValue('gradientBgLight', 'gradientBgDark')

    return (
        <>
            <Center w='100%' h={20} >
                <Heading
                    fontSize={['3xl', '5xl', '7xl']}
                    variant={variant}
                >
                    SVGies
                </Heading>
            </Center>

            <Center>
                <VStack >
                    <Center px='3em' pt='1em'>
                        <p align='center' >
                            <strong>SVGies</strong> are a unique visual representation of your wallet address <br />
                            You can mint <strong>only ONE</strong> per address because they are a 1:1 representation of your wallet <br />
                            {/* They are stored on-chain in the Polygon mainnet network <br /> */}
                            They are stored <strong>on-chain</strong> in the <strong>Ethereum mainnet</strong> network as a <strong>Soulbound NFT</strong><br />
                            You can think of them as Blockies that evolved to <strong>SVG</strong>s (Scalable Vector Graphics never get pixelated) <br />
                            Drawn as generative art in a beautifully detailed and colorful SVG <br />
                            Using Quadratic and Cubic Bézier curves and leveraging our brain&apos;s ability to remember vertical simmetry <br />
                            It is tied to your wallet and <strong>cannot be transferred</strong>
                        </p>
                    </Center>
                </VStack>
            </Center>
        </>
    )
}

export default PageHeader