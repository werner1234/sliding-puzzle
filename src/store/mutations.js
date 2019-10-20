import Vue from 'vue';

export const mutations = {
    scramblePuzzle(state) {
        //generate random numbers
        let generatedNumbers = [];

        while (generatedNumbers.length < 15) {
            let number = Math.floor(Math.random() * 15);
            if (generatedNumbers.indexOf(number) == -1) {
                generatedNumbers.push(number);
            }
        }
        //scramble the puzzle
        let count = 0;
        for (var row = 0; row < state.matrix.length; row++) {
            for (var col = 0; col < state.matrix[row].length; col++) {
                Vue.set(state.matrix[row], col, generatedNumbers[count++]);
            }
        }
        //make the last tile empty
        Vue.set(state.matrix[3], 3, "E");
    },
    move(state, payload) {
        //move image tile to new location
        Vue.set(state.matrix[payload.emptyLocationRow], payload.emptyLocationCol, state.matrix[payload.tileX][payload.tileY]);
        //clear previous location
        Vue.set(state.matrix[payload.tileX], payload.tileY, "E");
    }
}