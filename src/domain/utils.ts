export const shuffleObjects = (array: Array<object>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};


export const unSlugify = (text: string) => {
  let words = text.split("-")
  const formattedWords: Array<string> = []
  words.forEach(word => {
    formattedWords.push(word.toLowerCase().charAt(0).toUpperCase() + word.slice(1))
  })
  return formattedWords.join(" ")
}