let addedKingdoms = [];

function validateInput(val) {
  return !!val || 'Enter input in the format `<Valid Kingdom>, "<Secret message>"`, Or add a comma (,) to skip input';
}


function filterValue(val, kingdoms) {
  if(val && val.includes(",")) {
    let splittedArray = val.split(",");
    let kingdom = splittedArray[0].toLowerCase();
    if(kingdoms.indexOf(kingdom) > -1 && addedKingdoms.indexOf(kingdom) === -1) {
      addedKingdoms.push(kingdom);
      return {
        'kingdom': kingdom,
        'message': splittedArray[1].replace(/['"“]+/g, '')
      };
    }
    return false;
  }
  return false;
}


module.exports.validateInput = validateInput;
module.exports.filterValue = filterValue;
