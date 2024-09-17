
// Checkout the Guidebook examples to get an idea of other ways you can use scripting
// https://help.aidungeon.com/scripting

// Any functions or variables you define here will be available in your other modifier scripts.



/**
const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)] || null;
}
*/
const getRandomItem = (arr) => {
  if (arr.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(`Array: ${arr}, Random Index: ${randomIndex}, Selected Item: ${arr[randomIndex]}`);
  return arr[randomIndex];
  }

//
const addReputationToOutput = (text) => {
  if (state.relationshipMessage) {
      text += `\n${state.relationshipMessage}`;
      state.relationshipMessage = ''; // Clear the message after adding to output
  }
  return text;
};

// Removes vertical bar enclosed |substrings| from the larger text string
function removeBarEnclosedText(rawText) {
  let newText = rawText;
  let barEnclosedPattern = /\|[^|]*\|/g;
  // Remove all well-formed |text| patterns
  newText = newText.replace(barEnclosedPattern, '');
  // Remove any remaining single | if there are odd ones
  newText = newText.replace(/\|/g, '');
  return newText;
}



/**
* Updates the active player's threat array with any new items from the default threat array.
* @param {Object} activePlayer The active player object.
* @param {Object} defaultPlayerYou The default player object.
*/
const updateThreatArray = (activePlayer, defaultPlayerYou) => {
  const defaultThreatArray = defaultPlayerYou.threat.array;
  defaultThreatArray.forEach(item => {
      if (!activePlayer.threat.array.includes(item)) {
          activePlayer.threat.array.push(item);
      }
  });
}

