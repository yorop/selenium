let orgArr0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(orgArr0)


function crpShuffle(arr){
    let crpArr = window.crypto.getRandomValues(new Uint8Array(arr.length))
    return arr.sort((a,b) => crpArr[arr.indexOf(a)] - crpArr[arr.indexOf(b)])
}

function testSort(arr){
    tmpArr =  [...arr]
    return crpShuffle(tmpArr)
}


sortedArr = testSort(orgArr0)
console.log(sortedArr)

chkArr = []

testNum = 10000
let divNum = 45

for (i = 0; i < testNum; i++){
    chkArr.push(testSort(orgArr0))
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
