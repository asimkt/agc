const {validateInput, filterValue} = require('./utils.js');

const KINGDOMS = ['land', 'water', 'ice', 'air', 'fire'];

// const QUESTIONS = [
//   {
//     type : 'input',
//     name : 'input1',
//     validate: validateInput,
//     filter: filterValue,
//     message : 'Input: '
//   },
//   {
//     type : 'input',
//     name : 'input2',
//     validate: validateInput,
//     filter: filterValue,
//     message : 'Input: '
//   },
//   {
//     type : 'input',
//     name : 'input3',
//     validate: validateInput,
//     filter: filterValue,
//     message : 'Input: '
//   },
//   {
//     type : 'input',
//     name : 'input4',
//     validate: validateInput,
//     filter: filterValue,
//     message : 'Input: '
//   },
//   {
//     type : 'input',
//     name : 'input5',
//     validate: validateInput,
//     filter: filterValue,
//     message : 'Input: '
//   }
// ];

const QUESTIONS = [
  {
    type : 'input',
    name : 'input1',
    validate: validateInput,
    filter: (val) => filterValue(val, KINGDOMS),
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input2',
    validate: validateInput,
    filter: (val) => filterValue(val, KINGDOMS),
    message : 'Input: '
  }
];

module.exports.KINGDOMS = KINGDOMS;
module.exports.QUESTIONS = QUESTIONS;