const getActivePlayerName = require('./get.active.player.name')

/**
 * Check the input text for player actions.
 * @param {*} str The input from the player.
 * @returns An object containing the players relevant action information.
 */
function getAction(str, names) {
    // Check input for the action indicator '> '
    if (str.startsWith('> ')) {
        let actions = str.substring(2)
        return {
            name: '',
            actions: []
        }
    }
    return null;
}

describe('getAction', () => {
    const info = {
        CharacterNames: [
            'Mike',
            'John',
            'Tommy'
        ]
    }

    test('> You Jump.', () => {
        const result = getAction('> John tied to jump', info.CharacterNames)
        expect(result).toEqual({
            index: 1,
            name: 'John',
            action: 'tied to jump'
        })
    })
})