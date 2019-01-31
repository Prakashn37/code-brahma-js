export const pairs = (arr) => {
    if (!arr || !Array.isArray(arr)) {
        console.log('Please pass an array as argument')
        return
    }
    arr = new Set(arr)
    let result = ''
    for (let i of arr) {
        if (arr.has(i + 1)) {
            result += ` (${i + 1},${i}) `
        }
    }
    result = result.length ? result : 'No pairs found'
    console.log(result)
}