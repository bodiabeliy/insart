export const transformCurrencyList = (basicArray:any[]):any[] => {
    const leftArray = basicArray.map(item => item.split('/')[0]);
    const rightArray = basicArray.map(item => item.split('/')[1]);
    const mergedArray = leftArray.concat(rightArray);
    const resultArray = mergedArray.filter((item, index, array) => array.indexOf(item) === index);

    return resultArray
}

