export const transformCurrencyList = (basicArray:any[]):any[] => {
    const leftArray = basicArray.map(item => item.split('/')[0]);
    const rightArray = basicArray.map(item => item.split('/')[1]);
    const mergedArray = leftArray.concat(rightArray);
    const resultArray = mergedArray.filter((item, index, array) => array.indexOf(item) === index);

    return resultArray
}

export  const converter = (direction:string, toCurrency:any, exchangeRate:any):any => {
    console.log("toCurrency * exchangeRate", toCurrency * exchangeRate);

    if (direction ="from->to") {
        
        return toCurrency * exchangeRate
    }
    if (direction ="to->from") {
        return toCurrency * exchangeRate
    }

}