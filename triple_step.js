exports.generateSequences = (list) => {
    let sequencesList = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 2; j < list.length; j++) {
            let sequence = [];
            for (let k = i; k < list.length; k = k + j) {
                sequence.push(list[k])
            }

            if (sequence.length >= 2) {
                sequencesList.push(sequence)
            }

            if (sequence.length > 2) {
                sequencesList.push([sequence[0], sequence[1]])
            }
        }
    }
    return sequencesList
};

exports.maxSubArrayNonConsecutive = (arr) => {
  let maxCur = [arr[0], Math.max(arr[0], arr[1])];
  let maxGlob = Math.max(...maxCur);
    for (let i = 2; i < arr.length; i++) {
        maxCur[i] =  Math.max(arr[i], maxCur[i - 2] + arr[i], maxGlob);
        maxGlob = Math.max(maxGlob, maxCur[i])
    }
    return maxGlob
};