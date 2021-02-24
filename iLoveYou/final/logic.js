//function statement named howMuchILoveYou with nbPetals param
function howMuchILoveYou(nbPetals) {
    //variable named mapPhrase with an object like array starting 0
    // not at all'
      let mapPhrase = {
        0: 'not at all',
        1: 'I love you',
        2: 'a little',
        3: 'a lot',
        4: 'passionately',
        5: 'madly'
      }
      //return mapPhrase with index pointer nbPetals % 6
      return mapPhrase[nbPetals % 6]
    }