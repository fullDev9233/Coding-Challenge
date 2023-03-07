const formatNumbers = (number: any, locale?: string, numberOfDecimals = 2) => {
    if (number === '') return ''

    const decimalsToUse = numberOfDecimals === 0 ? 0 : numberOfDecimals
    return new Intl.NumberFormat(locale || 'en-US', {
        minimumFractionDigits: decimalsToUse,
        maximumFractionDigits: decimalsToUse,
    }).format(number)
}

export default formatNumbers
