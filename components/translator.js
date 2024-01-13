const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    americanToBritish(str) {
        const dictionaries = [americanOnly, americanToBritishSpelling, americanToBritishTitles];
        let translation = str;

        dictionaries.forEach((dictionary) => {
            for (const [key, val] of Object.entries(dictionary)) {
                if (dictionary === americanToBritishTitles) val = val.replace(/\b\w/, match => match.toUpperCase());
                let regex = new RegExp(`(?<![a-zA-Z0-9])${key}(?![a-zA-Z0-9])`, 'ig');
                translation = translation.replace(regex, `<span class="highlight">${val}</span>`)
            }
        })

        for (const [key, val] of Object.entries(britishOnly)) {
            let regex = new RegExp(`(?<![a-zA-Z0-9])${val}(?![a-zA-Z0-9])`, 'ig');
            translation = translation.replace(regex, `<span class="highlight">${key}</span>`)
        };

        translation = translation[0].toUpperCase() + translation.slice(1);

        translation = translation.replace(/(\d?\d\:\d\d)/gm, (match) => {
            match = match.replace(/\:/, '.');
            return `<span class="highlight">${match}</span>`
        });

        translation = translation === str ? "Everything looks good to me!" : translation;
        return { text: str, translation: translation }
    }

    britishToAmerican(str) {
        const dictionaries = [americanOnly, americanToBritishSpelling, americanToBritishTitles];
        let translation = str;

        dictionaries.forEach((dictionary) => {
            for (const [key, val] of Object.entries(dictionary)) {
                if (dictionary === americanToBritishTitles) key = key.replace(/\b\w/, match => match.toUpperCase());
                let regex = new RegExp(`(?<![a-zA-Z0-9])${val}(?![a-zA-Z0-9])`, 'ig');
                translation = translation.replace(regex, `<span class="highlight">${key}</span>`)
            }
        })

        for (const [key, val] of Object.entries(britishOnly)) {
            let regex = new RegExp(`(?<![a-zA-Z0-9])${key}(?![a-zA-Z0-9])`, 'ig');
            translation = translation.replace(regex, `<span class="highlight">${val}</span>`)
        };

        translation = translation[0].toUpperCase() + translation.slice(1);

        translation = translation.replace(/(\d?\d\.\d\d)/gm, (match) => {
            match = match.replace(/\./, ':');
            return `<span class="highlight">${match}</span>`
        });


        translation = translation === str ? "Everything looks good to me!" : translation;
        return { text: str, translation: translation }
    }
}

module.exports = Translator;