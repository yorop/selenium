
// console.log(orgArr)


function crpShuffle(arr){
    let crpArr = window.crypto.getRandomValues(new Uint8Array(arr.length))
    return arr.sort((a,b) => crpArr[arr.indexOf(a)] - crpArr[arr.indexOf(b)])
}

function testSort(arr){
    tmpArr =  [...arr]
    return crpShuffle(tmpArr)
}

let orgArr = ['レキント','キント','コンガ','トゥンバドーラ','ボンゴ','マッチョ','エンブラ']

// sortedArr = testSort(orgArr)
console.log(testSort(orgArr))


/*
chkArr = []

testNum = 10000
let divNum = 45

for (i = 0; i < testNum; i++){
    chkArr.push(testSort(orgArr))
}

sumArray = [
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[0], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[1], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[2], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[3], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[4], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[5], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[6], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[7], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[8], 0) / divNum),
    Math.trunc(chkArr.reduce((acc, cur) => acc + cur[9], 0) / divNum),
]

console.log(sumArray)

    */
