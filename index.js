#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const checkMessagesResult = require('./check-result.js');

const {QUESTIONS} = require('./constants.js')

program
  .version('0.0.1')
  .description('A golden crown');

program
  .command('send-messages')
  .description('Add the messages from King Shan to five kingdoms')
  .action(() => {
    prompt(QUESTIONS).then(answers => {
      checkMessagesResult(answers)
    });
  });

program.parse(process.argv);
