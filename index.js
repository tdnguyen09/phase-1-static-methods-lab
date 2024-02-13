class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize (string){
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize(string){
    const exceptionWords = ['the','a','an','but','of','and','for','at','by','from']
    const words = string.split(' ');
    for (let i =0; i < words.length; i++){
      const word = words[i];
      if(i === 0 || !exceptionWords.includes(word.toLowerCase())){
        words[i] = Formatter.capitalize(word);
      }
    }
    return words.join(' ');
  }
}
