const Text = require('../models/Text');
const Markov = require('markov-chains-text').default;

function createNewSentence(markov) {
  let generatedSentence = markov.makeSentence({ tries: 20 });
  while(generatedSentence.length > 280) {
    generatedSentence = markov.makeSentence();
  }

  return generatedSentence;
}

function createNewMarkov() {
  return Text
    .find()
    .lean()
    .then(allTextsObjs => {
      return allTextsObjs.reduce((acc, text) => {
        return acc + ' ' + text.text;
      }, '');
    })
    .then(bigTextString => {
      const markov = new Markov(bigTextString);
      return createNewSentence(markov);
    });
}

module.exports = createNewMarkov;
