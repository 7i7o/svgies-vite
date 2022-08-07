import { useColorMode } from '@chakra-ui/react'
import Home from './components/Home';

/** Rainbow Kit Imports**/
import { alchemyId, network } from './constants/constants'
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, lightTheme, RainbowKitProvider, } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig, } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const selectedChain = network === 'mainnet' ? chain.mainnet : chain.polygonMumbai

const App = () => {
  /** Rainbow Kit Configs**/
  const { chains, provider } = configureChains(
    [selectedChain],
    [alchemyProvider({ alchemyId: alchemyId }), publicProvider()]
  );
  const { connectors } = getDefaultWallets({ appName: 'SVGies', chains });
  const wagmiClient = createClient({ autoConnect: true, connectors, provider })

  const { colorMode } = useColorMode()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={colorMode === 'light' ? lightTheme() : darkTheme()}>
        <div className="svgiesApp">
          <Home />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
