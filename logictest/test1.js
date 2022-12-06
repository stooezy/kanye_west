let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever

/**
 * Answer
 * 
 * Yoga Permana
 */
const wordTriangle = (sentence) => {
  for (let i = 1; i <= sentence.length; i++) {
    console.log(sentence.substring(0, i))
  }
}


// debug
wordTriangle(words)
