// mutations.spec.js
import { mutations } from '../mutations'

// destructure assign `mutations`
const { increment } = mutations

describe('mutations', () => {
    it('move', () => {
        // mock state
        const state = { matrix: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, "E"]] };

        // mock after state
        const stateAfter = { matrix: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, "E"], [12, 13, 14, 11]] };

        // apply mutation
        const params =  {tileX: 2, tileY: 3, emptyLocationRow: 3, emptyLocationCol: 3};
        mutations.move(state, params)
        // assert result
        expect(state.matrix).toEqual(stateAfter.matrix)
    })
})