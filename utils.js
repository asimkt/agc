let addedKingdoms = [];

function validateInput(val) {
  return !!val || 'Enter input in the format `<Valid Kingdom>, "<Secret message>"`, Or add a comma (,) to skip input';
}


function filterValue(val, kingdoms) {
  if(val && val.includes(",")) {
    let splittedArray = val.split(",");
    let kingdom = splittedArray[0].toLowerCase();
    if(kingdoms[kingdom] && addedKingdoms.indexOf(kingdom) === -1) {
      addedKingdoms.push(kingdom);
      return {
        'kingdom': kingdom,
        'emblem': kingdoms[kingdom],
        'message': splittedArray[1].toLowerCase().replace(/[^a-z]+/g, '')
      };
    }
    return false;
  }
  return false;
}


module.exports.validateInput = validateInput;
module.exports.filterValue = filterValue;
