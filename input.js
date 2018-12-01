#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

program
  .version('0.0.1')
  .description('A golden crown');

program
  .command('WhoisRuler')
  .description('Who is the ruler of Southeros?')
  .action(() => {
    console.info('None');
  })

program
  .command('Allies')
  .description('Allies of King Shan?')
  .action(() => {
    console.info('None');
  })

const questions = [
  {
    type : 'input',
    name : 'input1',
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input2',
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input3',
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input4',
    message : 'Input: '
  },
  {
    type : 'input',
    name : 'input5',
    message : 'Input: '
  }
];

program
  .command('sendMessages')
  .description('Add the messages from King Shan to five kingdoms')
  .action(() => {
    prompt(questions).then(answers => {
      console.info(answers);
      console.info(JSON.stringify(answers));
    });
  });

program.parse(process.argv);
