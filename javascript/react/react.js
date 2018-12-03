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
   * Propagate changes to linked cells.
   */
  propagate() {
    this.linkedCells.forEach(linkedCell => linkedCell.update());
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
    this.callbacks = [];
    this.subscribe();
  }

  /**
   * Adds a callback to this cell.
   * @param {object} cb - A callback object.
   */
  addCallback(cb) {
    this.callbacks.push(cb);
  }

  /**
   * Check if computed value is different from saved value.
   * @returns {boolean}
   */
  isNewValue() {
    return this.fn(this.inputCells) !== this.value;
  }

  /**
   * Removes the specified callback from this cell.
   * @param {object} cb - A callback object.
   */
  removeCallback(cb) {
    this.callbacks = this.callbacks.filter(callback => cb !== callback);
  }

  /**
   * Link this cell to each input cell so it change receive state changes.
   */
  subscribe() {
    this.inputCells.forEach(cell => cell.link(this));
  }

  /**
   * If changes in the input cells this cell relies on will result in a new value, update this
   * cell's value. After updates are complete, trigger any registered callbacks.
   */
  update() {
    if (this.isNewValue()) {
      this.setValue(this.fn(this.inputCells));
      if (this.callbacks.length !== 0) this.callbacks.forEach(cb => cb.setValue(this));
    }
  }
}

/**
 * Class representing a callback which tracks changes in state.
 */
class CallbackCell {
  /**
   * Creates a callback.
   * @param {function} fn - The logic for grabbing the state change.
   */
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  /**
   * Save the new state.
   * @param {*} cell - A cell object who's state has just changed.
   */
  setValue(cell) {
    this.values.push(this.fn(cell));
  }
}

export { InputCell, ComputeCell, CallbackCell };
