#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const checkMessagesResult = require('./check-result.js');

const {KINGDOMS, QUESTIONS} = require('./constants.js')

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

program
  .command('sendMessages')
  .description('Add the messages from King Shan to five kingdoms')
  .action(() => {
    prompt(QUESTIONS).then(answers => {
      console.info(answers);
      checkMessagesResult(answers)
    });
  });

program.parse(process.argv);
