import Vue from 'vue';

export const getters =  {
    //get co-ordinates of the empty square
    emptySquareLocation: state => {
        let emptySquareLocation = [];
        for (var row = 0; row < state.matrix.length; row++) {
            for (var col = 0; col < state.matrix[row].length; col++) {
                if (state.matrix[row][col] === "E") {
                    emptySquareLocation.push(row);
                    emptySquareLocation.push(col);
                }
            }
        }

        return emptySquareLocation;
    },
    //has the puzzle been completed
    isCompleted: state => {
        let count = 0;
        let completed = true;

        outerloop:
        for (var row = 0; row < state.matrix.length; row++) {
            for (var col = 0; col < state.matrix[row].length; col++) {
                //check if squares are sequential, skipping the last one
                if (state.matrix[row][col] != count++ && !(col == 3 && row == 3)) {
                    completed = false;
                    break outerloop;
                };
            }
        }

        return completed;
    }
}