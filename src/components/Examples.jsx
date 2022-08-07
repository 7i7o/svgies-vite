import { Center, Heading, useColorModeValue, Wrap, WrapItem, Image } from "@chakra-ui/react"
import Card from "./Card"

const images = [
    'k',
    'g',
    'e',
    'c',
    'l',
    'f',
    'd',
    'i',
    'h',
    'j',
    'a',
    'b',
]

const Examples = () => {

    const headingVariant = useColorModeValue('withShadowLight', 'withShadowDark')
    const cardVariant = useColorModeValue('shadowLight', 'shadowDark')

    return (
        <>
            <Center h='7em'>
                <Heading
                    size='sm'
                    variant={headingVariant}
                >
                    SVGies Examples
                </Heading>
            </Center>

            <Center pb='3em'>
                <Wrap spacing="30px" pt='10px' pb='10px' justify='center' >
                    {images.map((w, i) => {
                        return (
                            <WrapItem key={i}>
                                <Card
                                    size='sm'
                                    variant={cardVariant}
                                >
                                    <Image
                                        src={`/examples/${w}.png`}
                                        width={150}
                                        height={150} />
                                </Card>
                            </WrapItem>
                        )
                    })}
                </Wrap>
            </Center>
        </>
    )

}

export default Examples