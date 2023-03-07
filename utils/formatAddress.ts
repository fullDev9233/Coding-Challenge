const formatAddress = (address = '', startLen = 4, endLen = 4) => {
    return `${address.substring(0, startLen)}...${address.substring(address.length - endLen, address.length)}`
}

export default formatAddress
