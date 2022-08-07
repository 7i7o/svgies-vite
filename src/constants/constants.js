/** NETWORK SELECTION **/
// export const network = 'mumbai'
export const network = 'mainnet'


/** Mainnet **/
import contractABIMainnet from "./contractABI.mainnet.json"
const addressOrNameMainnet = '0xEC800E57D8B258D69CCaBb0D807dA98c89E6C76a'; // Mainnet (Fixed Price)
const openseaBaseUriMainnet = `https://opensea.io/assets/ethereum/${addressOrNameMainnet}/`; // Mainnet (Fixed Price)
const etherscanBaseUriMainnet = `https://etherscan.io/token/${addressOrNameMainnet}?a=`; // Mainnet (Fixed Price)
const openseaURLMainnet = 'https://opensea.io/collection/svgies'; // Mainnet (Fixed Price)
const coinNameMainnet = 'ETH';
const mainnet = {
    contractABI: contractABIMainnet,
    addressOrName: addressOrNameMainnet,
    openseaURL: openseaURLMainnet,
    openseaBaseUri: openseaBaseUriMainnet,
    etherscanBaseUri: etherscanBaseUriMainnet,
    alchemyId: import.meta.env.ALCHEMY_ID_MAINNET,
    coinName: coinNameMainnet,
}

/** Polygon Mumbai **/
import contractABIMumbai from "./contractABI.mumbai.json"
const addressOrNameMumbai = '0xD2c21633a243169A6b6E2688d9A9fC1A10809cD5'; // Mumbai (Fixed Price)
const openseaBaseUriMumbai = `https://testnets.opensea.io/assets/mumbai/${addressOrNameMumbai}/`; // Mumbai (Fixed Price)
const etherscanBaseUriMumbai = `https://mumbai.polygonscan.com/token/${addressOrNameMumbai}?a=`; // Mumbai (Fixed Price)
const openseaURLMumbai = 'https://testnets.opensea.io/collection/test-7jc4s9ymhh'; // Mumbai (Fixed Price)
const coinNameMumbai = 'MATIC';
const mumbai = {
    contractABI: contractABIMumbai,
    addressOrName: addressOrNameMumbai,
    openseaURL: openseaURLMumbai,
    openseaBaseUri: openseaBaseUriMumbai,
    etherscanBaseUri: etherscanBaseUriMumbai,
    alchemyId: import.meta.env.ALCHEMY_ID_MUMBAI,
    coinName: coinNameMumbai,
}

/** Current Dapp connection **/
const constants = network === 'mainnet' ? mainnet : mumbai

/** Export Constants **/
export const contractABI = constants.contractABI
export const addressOrName = constants.addressOrName
export const openseaURL = constants.openseaURL
export const openseaBaseUri = constants.openseaBaseUri
export const etherscanBaseUri = constants.etherscanBaseUri
export const alchemyId = constants.alchemyId
export const coinName = constants.coinName
