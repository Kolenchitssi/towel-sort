
// You should implement your task here.

module.exports = function towelSort(matrix = []) {

    let arr = [];
    let len = matrix.length;

    for (let i = 0; i < len; i++) {
        if (i % 2 == 0) {
            arr = arr.concat(matrix[i]);
        }
        else {
            arr = arr.concat(matrix[i].reverse());
        }
    }

    console.log(arr);

    return arr;
}
