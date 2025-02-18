const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/**
 * Asynchronously (via setTimeout) computes the sum of a given row in the provided 2d array.
 * @param arr - A 2d array of numbers.
 * @param rowIdx - The index of the row to be summed.
 */
function sumOfARow(arr:number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(arr.length > rowIdx) {
                let sum = 0;
                console.log(`Computing sum of row ${rowIdx}`)
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }
            else {
                reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`)
            }
        })
    })
}

/**
 * Utilizes 'Promise.all' to concurrently calculate the sum of all rows in the provided 2d array.
 * @param numArr - A 2d array of numbers.
 */
async function calculateSum(numArr: number[][]) {
    if(numArr.length === 0) {
        throw 'Array is empty';
    }
    const rowSumPromises = []
    for(let x = 0; x < numArr.length; x++) {
        rowSumPromises.push(sumOfARow(numArr, x))
    }
    try {
        const rowSums = await Promise.all(rowSumPromises)
        let sum = 0;
        console.log('Computing sum of all rows...');
        rowSums.forEach((rowSum: number) => {
            sum += rowSum
        })
        console.log(`Sum = ${sum}`);
    } catch (error){
        console.log(`Error: ${error}`)

    }
}

calculateSum(array2D_1);

/*let rowSumPromises: Promise<number>[] = [];

for(let x = 0; x < array2D_1.length; x++) {
    rowSumPromises.push(sumOfARow(array2D_1, x));
}*/


/*Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        console.log('Computing sum of all rows...');
        rowSums.forEach(rowSum => {
            sum += rowSum
        })
        console.log(`Sum = ${sum}`);
    })
    .catch((error) => console.log(`Error: ${error}`))

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        console.log('Computing sum of all rows...');
        rowSums.forEach(rowSum => {
            sum += rowSum
        })
        console.log(`Sum = ${sum}`);
    })
    .catch((error) => console.log(`Error: ${error}`))*/
