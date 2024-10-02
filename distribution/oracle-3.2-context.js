// Checkout the Guidebook examples to get an idea of other ways you can use scripting
// https://help.aidungeon.com/scripting

// Every script needs a modifier function

const modifier = (text) => {
  text = removeBarEnclosedText(text);
  return { text }
}

modifier(text)