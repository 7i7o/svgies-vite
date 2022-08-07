import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletRainbowConnectButton = () => {

    return (
        <ConnectButton accountStatus={{ smallScreen: 'avatar', largeScreen: 'address', }}
            chainStatus={{ smallScreen: 'icon', largeScreen: 'full', }}
            showBalance={{ smallScreen: false, largeScreen: true, }}
        />
    )

}

export default WalletRainbowConnectButton