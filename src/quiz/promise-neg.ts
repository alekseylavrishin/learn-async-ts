const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

/**
 * Utilizes 'Promise.all' to concurrently log rows in the provided 2d array which
 *     contain at least one negative number.
 * @param numArr - A 2d array of numbers.
 */
async function logNegativeRow(numArr: number[][]) {
    if(numArr.length === 0) {
        throw 'Array is empty';
    }
    const rowCheckPromises = []
    for(let x = 0; x < numArr.length; x++) {
        rowCheckPromises.push(checkRowForNegative(numArr, x))
    }
    try {
        console.log("inside try")
        const res = await Promise.all(rowCheckPromises)
        console.log("Rows with negative numbers:")
        res.forEach((row) => {
            if(row) {
                console.log(row);
            }
        })
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

/**
 * Asynchronously (via setTimeout) checks if a row in the provided 2d array contains a negative number.
 * @param arr - A 2d array of numbers.
 * @param rowIdx - The index of the row to be checked for negative numbers.
 */
function checkRowForNegative(arr:number[][], rowIdx: number): Promise<number[] | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(arr.length > rowIdx) {
                console.log(`Checking row ${rowIdx} for negative numbers...`);
                if (arr[rowIdx].some(num => num < 0)) {
                    resolve(arr[rowIdx]);
                } else {
                    resolve(null);
                }
            }
            else {
                reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`)
            }
        })
    })
}

logNegativeRow(array2D_3);
