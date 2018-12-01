function checkMessagesResult(messages) {
  let containsSecret = false;
  const formattedMessageObjectsArray = Object.values(messages); //{kingdom: "land", message: "Die or play the tame of thrones"}, {kingdom: "air", message: "Let’s swing the sword together”"}
  const alliesOfKing = formattedMessageObjectsArray.filter(item => {
    return isAllLettersIncluded(item.emblem, item.message);
  })
  console.info('\n\nWho is the ruler of Southeros?')
  console.info(`${alliesOfKing.length > 2 ? 'King Shan' : 'None'}`)
  console.info('Allies of King Shan?')
  let namesofAlliesOfKing = alliesOfKing.reduce((namesString, item) => {
    return namesString.concat(item.kingdom + ', ');
  }, '')
  // Removes trailing space and comma
  console.info(namesofAlliesOfKing.length > 0 ? namesofAlliesOfKing.trim().slice(0,-1) : 'None');
}

function isAllLettersIncluded(emblem, message) {
  let checkedChars = [];
  let sumOfOccurencesOfLetters = emblem.split("").reduce((acc, item) => {
    if(checkedChars.indexOf(item) > -1) {
      return acc + 1;
    }
    checkedChars.push(item);
    let matchCharactersRegex = new RegExp(item, 'g');
    return (message.match(matchCharactersRegex)||[]).length >= (emblem.match(matchCharactersRegex)||[]).length ? acc + 1 : acc;
  }, 0);
  return sumOfOccurencesOfLetters === emblem.length;
}

module.exports = checkMessagesResult;
