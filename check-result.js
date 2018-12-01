function checkMessagesResult(messages) {
  let containsSecret = false;
  const formattedMessageObjectsArray = Object.values(messages); //{kingdom: "land", message: "Die or play the tame of thrones"}, {kingdom: "air", message: "Let’s swing the sword together”"}
  const alliesOfKing = formattedMessageObjectsArray.filter(item => {
    return isAllLettersIncluded(item.kingdom, item.message);
  })
  console.info('\n\nWho is the ruler of Southeros?')
  console.info(`${alliesOfKing.length > 2 ? 'King Shan' : 'None'}`)
  console.info('Allies of King Shan?')
  let namesofAlliesOfKing = alliesOfKing.reduce((namesString, item) => {
    return namesString.concat(item.kingdom + ', ');
  }, '')
  // Removes trailing space and comma
  console.info(namesofAlliesOfKing.trim().slice(0,-1));
}

function isAllLettersIncluded(kingdom, message) {
  let sumOfOccurencesOfLetters = kingdom.split("").reduce((acc, item) => {
    return message.indexOf(item) > -1 ? acc + 1 : acc;
  }, 0);
  return sumOfOccurencesOfLetters === kingdom.length;
}

module.exports = checkMessagesResult;
