/**
 * Format a paragraph
 * @param {string} text The text to format
 * @returns The formatted text
 */
const formatParagraph = (text) => text.replace(/(?! {2,})[ \n|\n ]{2,}|\n/g, '\n\n')
module.exports = formatParagraph
