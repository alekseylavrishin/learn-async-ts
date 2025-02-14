const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

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


async function calculateSum(numArr: number[][]) {
    if(numArr.length === 0) {
        throw '';
    }
    const rowSumPromises = []
        for(let x = 0; x < numArr.length; x++) {
            rowSumPromises.push(sumOfARow(numArr, x))
        }
        try {
            const rowSums = await Promise.all(rowSumPromises)
            console.log(rowSums)
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
