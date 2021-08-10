const check = (move) => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X') {
           //win krestik
            return(1)
        } else if (boxes[arr[i][0]].innerHTML === '0' && boxes[arr[i][1]].innerHTML === '0' && boxes[arr[i][2]].innerHTML === '0') {
            //win nolik
            return(2)

        } else if (!(boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X') && !(boxes[arr[i][0]].innerHTML === '0' && boxes[arr[i][1]].innerHTML === '0' && boxes[arr[i][2]].innerHTML === '0') && move === 8) {
            //nichya
            return('Ничья')


        }
    
    }
}

export default check;