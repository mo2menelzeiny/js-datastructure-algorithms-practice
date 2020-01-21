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
    let maxCurrent = [arr[0], Math.max(arr[0], arr[1])];
    let maxGlobal = Math.max(...maxCurrent);
    for (let i = 2; i < arr.length; i++) {
        maxCurrent[i] = Math.max(arr[i], maxCurrent[i-2] + arr[i], maxGlobal);
        maxGlobal = Math.max(maxGlobal, maxCurrent[i]);
    }
    return maxGlobal;
};