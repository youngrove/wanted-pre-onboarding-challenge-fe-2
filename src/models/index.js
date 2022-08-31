/**
 * @typedef Todo
 * @type {object}
 * @property {number} id
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {string} [tags]
 */

/**
 * @type {Todo}
 */
const Todo = {
  id: 0,
  content: "",
  isCompleted: false,
  category: "",
  tags: "",
};

/**
 * @type {Todo[]}
 */
const Todos = [];
