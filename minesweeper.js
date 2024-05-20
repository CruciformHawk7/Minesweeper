//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MINE_MARKER = '*';
const SAFE_ZONE = ' ';

export const annotate = (input) => {
  return input.map((xLine, xCoord) =>  
    xLine.split('').map((entry, yCoord) => 
      entry === MINE_MARKER ? MINE_MARKER : getNeighbourCount([xCoord, yCoord], input)
    ).join('') || ''
  )
};

function getNeighbourCount(coord, matrix) {
  return getDiagonalVals(coord, matrix)
    .reduce((mineCount, field) => 
      field === MINE_MARKER ? mineCount + 1 : mineCount, 
    0) || SAFE_ZONE;
}

function getDiagonalVals(coord, matrix) {
  let neighbours = getDiagonalCoordsFor(coord);
  return neighbours.map(([x,y]) => matrix[x] && matrix[x][y] || undefined );
}

/**
 * Gets neighbours' coordinates.
 * @param {Array<Number} coords Coordinates.
 * @returns An array with coords of neighbours. 
 */
function getDiagonalCoordsFor([x, y]) {
  return ([
    [x-1, y-1], [x-0, y-1], [x+1, y-1],
    [x-1, y-0],             [x+1, y-0],
    [x-1, y+1], [x-0, y+1], [x+1, y+1]
  ]);
}
