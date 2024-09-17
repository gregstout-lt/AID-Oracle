const addReputationToOutput = (text) => {
  if (state.relationshipMessage) {
      text += `\n${state.relationshipMessage}`;
      state.relationshipMessage = ''; // Clear the message after adding to output
  }
  return text;
};