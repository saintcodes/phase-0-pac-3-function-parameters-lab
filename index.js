function introduction(name) {
  console.log(`Hi, my name is ${name}.`);
  return `Hi, my name is ${name}.`
}
introduction("Sinclair")

function introductionWithLanguage(name, language) {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Josh", "Ember.js")

function introductionWithLanguageOptional(name, language = "Javascript") {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Sinclair")

function introductionWithLanguageOptional(name, language = "Javascript") {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Sinclair", "Ember.js")