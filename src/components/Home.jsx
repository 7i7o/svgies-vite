import { Flex, Spacer, Divider } from "@chakra-ui/react"
import Footer from "./Footer"
import Examples from "./Examples"
import PageHeader from "./PageHeader"
import ThemeSwitcher from "./ThemeSwitcher"
import WalletRainbowConnectButton from "./WalletRainbowConnectButton"
import NFT from "./NFT/NFT"

const Home = () => {
    return (
        <main>
            <Flex h={14} alignItems='center'>
                <Spacer />
                <WalletRainbowConnectButton />
                <ThemeSwitcher />
            </Flex>
            <PageHeader />
            <NFT />
            <Divider />
            <Examples />
            <Divider />
            <Footer />
        </main>
    )

}

export default Home