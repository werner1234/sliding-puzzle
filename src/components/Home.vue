<template>
  <div class="puzzle-container">
    <h1>Sliding Puzzle</h1>
    <div class="puzzle">
      <div v-for="(row, rowindex) in matrix" :key="rowindex">
        <div class="square" v-for="(col, colindex) in row" :key="rowindex-colindex"
          v-bind:style="{ top: rowindex * 125 + 'px', left: colindex * 125 + 'px', 
          'background-position-x': -(Math.floor(matrix[rowindex][colindex] % 4) * 125) + 'px', 
          'background-position-y': -(Math.floor(matrix[rowindex][colindex] / 4) * 125) + 'px' }"
          v-if="col != 'E'" @click="updatePuzzle(rowindex, colindex)">
          <span class="badge">
            {{matrix[rowindex][colindex] + 1}}
          </span>
        </div> 
      </div>
    </div>    
  </div>
</template>

<script>
import Vue from "vue";
import { store } from '../store/store'

export default {
  name: "Home",
  created: function () {
    store.commit('scramblePuzzle');
  },
  computed: {
      matrix() {
        return store.state.matrix;
      }
    },
  methods: {
    updatePuzzle: function(tileX, tileY) {
      //get empty tile co-ordinates
      let emptySquareLocation = store.getters.emptySquareLocation;

      let emptyLocationRow = emptySquareLocation[0];
      let emptyLocationCol = emptySquareLocation[1];

      //check up
      if (tileX > 0 && tileX - 1 == emptyLocationRow && emptyLocationCol == tileY) {
        store.commit('move', { tileX, tileY, emptyLocationRow, emptyLocationCol });
      } 
      //check down
      else if (tileX < 3 && tileX + 1 == emptyLocationRow && emptyLocationCol == tileY) {
        store.commit('move', { tileX, tileY, emptyLocationRow, emptyLocationCol });
      } 
      //check right
      else if (tileY < 3 && tileY + 1 == emptyLocationCol && emptyLocationRow == tileX) {
        store.commit('move', { tileX, tileY, emptyLocationRow, emptyLocationCol });
      } 
      //check left
      else if (tileY > 0 && tileY - 1 == emptyLocationCol && emptyLocationRow == tileX) {           
        store.commit('move', { tileX, tileY, emptyLocationRow, emptyLocationCol });
      } 

      if (store.getters.isCompleted) {
        alert('Puzzle completed!')
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.puzzle-container {
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.puzzle {
  width: 500px;
  height: 500px;
  background-image: url("~@/assets/monks-bg.jpg");
  position: relative;
}

.square {
  width: 120px;
  height: 120px;
  background-image: url("~@/assets/monks.jpg");
  position: absolute;
  top: 0;
  left: 0;
  margin: 2.5px;
  text-align: left;
}

.badge {
  background-color: black;
  color: white;
  padding: 2px 4px;
  box-sizing: border-box;
  border-radius: 5px;
  top: 0px;
  position: relative;
  font-size: 12px;
}
</style>
