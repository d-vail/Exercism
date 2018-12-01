/**
 * @file Exercism: React
 */

/**
 * Class representing a cell with a settable value. When the value changes all linked cells
 * are notified.
 */
class InputCell {
  /**
   * Create an input cell and initialize an empty array to hold linked cells.
   * @param {number} value - The cell value.
   */
  constructor(value) {
    this.value = value;
    this.linkedCells = [];
  }

  /**
   * Set the cell value. Since the value is changing, propagate the state.
   * @param {number} value  - The cell value.
   */
  setValue(value) {
    this.value = value;
    this.propagate();
  }

  /**
   * Link the given cell to this cell by adding it to the linkedCells array.
   * @param {object} cell - A cell object.
   */
  link(cell) {
    this.linkedCells.push(cell);
  }

  /**
   * Propagate changes to linked cells by calling setValue() on each linked cell.
   */
  propagate() {
    this.linkedCells.forEach(linkedCell => linkedCell.setValue());
  }
}

/**
 * Class representing a cell with a value computed in terms of other cells.
 * @extends InputCell
 */
class ComputeCell extends InputCell {
  /**
   * Create a compute cell.
   * @param {array} inputCells - The cells which affect the value of this cell.
   * @param {function} fn - A forumla to compute the value of this cell in terms of the input cells.
   */
  constructor(inputCells, fn) {
    super(fn(inputCells));
    this.inputCells = inputCells;
    this.fn = fn;
    this.subscribe();
  }

  /**
   * Set the cell value using the function (fn) and input cells. Since the value is changing,
   * propagate the state.
   */
  setValue() {
    this.value = this.fn(this.inputCells);
    this.propagate();
  }

  /**
   * Link this cell to each input cell so it change receive state changes.
   */
  subscribe() {
    this.inputCells.forEach(cell => cell.link(this));
  }
}

class CallbackCell {}

export { InputCell, ComputeCell, CallbackCell };
