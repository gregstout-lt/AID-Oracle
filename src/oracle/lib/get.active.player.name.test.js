const { getActivePlayerName, PlayerActionInput } = require('./get.active.player.name')

describe('getActivePlayerName', () => {
  const info = {
    CharacterNames: [
      'Mike',
      'John',
      'Tommy'
    ]
  }

  test('Test one action.', () => {
    const input = '> John tied to jump. '
    const expectedOutput = new PlayerActionInput(1, 'John', 'do', 'tied to jump.')
    const result = getActivePlayerName(input, info.CharacterNames)
    expect(result).toEqual(expectedOutput)
  })

  test('Test multiple actions', () => {
    const input = '> John tied to jump. Then he ducked. '
    const expectedOutput = new PlayerActionInput(1, 'John', 'do-array', ['tied to jump.', 'Then he ducked.'])
    const result = getActivePlayerName(input, info.CharacterNames)
    expect(result).toEqual(expectedOutput)
  })

  test('Return null if no active player name is found.', () => {
    const input = '> Jimmy tied to jump. '
    const expectedOutput = null
    const result = getActivePlayerName(input, info.CharacterNames)
    expect(result).toEqual(expectedOutput)
  })

  test('', () => {
    const input = '> You say "Hello!" '
    const expectedOutput = new PlayerActionInput(4, 'You', 'say')
    const result = getActivePlayerName(input, info.CharacterNames)
    expect(result).toEqual(expectedOutput)
  })
})
