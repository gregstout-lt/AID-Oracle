const addReputationToOutput = (text) => {
  if (state.relationshipMessage) {
      text += `\n${state.relationshipMessage}`;
      state.relationshipMessage = ''; // Clear the message after adding to output
  }
  return text;
};

const modifier = (text) => {
  // Prevent the AI from seeing success and failure always even when doing a continue action.
  state.memory.frontMemory = '';

  // Add reputation message to the output text if present
  text = addReputationToOutput(text);

  return { text };
};

// Don't modify this part
modifier(text);