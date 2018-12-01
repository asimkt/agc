const {validateInput, filterValue} = require('./utils.js');

const KINGDOMS = {'land':'panda',
    'water':'octopus',
    'ice':'mammoth',
    'air':'owl',
    'fire':'dragon'};

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
  },
  {
    type : 'input',
    name : 'input3',
    validate: validateInput,
    filter: (val) => filterValue(val, KINGDOMS),
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input4',
    validate: validateInput,
    filter: (val) => filterValue(val, KINGDOMS),
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input5',
    validate: validateInput,
    filter: (val) => filterValue(val, KINGDOMS),
    message : 'Input: '
  }
];

// const QUESTIONS = [
//   {
//     type : 'input',
//     name : 'input1',
//     validate: validateInput,
//     filter: (val) => filterValue(val, KINGDOMS),
//     message : 'Input: '
//   },
//   {
//     type : 'input',
//     name : 'input2',
//     validate: validateInput,
//     filter: (val) => filterValue(val, KINGDOMS),
//     message : 'Input: '
//   }
// ];

module.exports.KINGDOMS = KINGDOMS;
module.exports.QUESTIONS = QUESTIONS;
