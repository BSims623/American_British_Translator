const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    test("Translate Mangoes are my favorite fruit. to British English", () => {
        let input = "Mangoes are my favorite fruit.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
    });
    test("Translate I ate yogurt for breakfast. to British English", () => {
        let input = "I ate yogurt for breakfast.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "I ate <span class=\"highlight\">yoghurt</span> for <span class=\"highlight\">brekkie</span>.")
    });
    test("Translate We had a party at my friend's condo. to British English", () => {
        let input = "We had a party at my friend's condo.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "We had a party at my friend's <span class=\"highlight\">flat</span>.")
    });
    test("Translate Can you toss this in the trashcan for me? to British English", () => {
        let input = "Can you toss this in the trashcan for me?";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "Can you toss this in the <span class=\"highlight\">bin</span> for me?")
    });
    test("Translate The parking lot was full. to British English", () => {
        let input = "The parking lot was full.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "The <span class=\"highlight\">car park</span> was full.")
    });
    test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
        let input = "Like a high tech Rube Goldberg machine.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.")
    });
    test("Translate To play hooky means to skip class or work. to British English", () => {
        let input = "To play hooky means to skip class or work.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "To <span class=\"highlight\">bunk off</span> means to skip class or work.")
    });
    test("Translate No Mr. Bond, I expect you to die. to British English", () => {
        let input = "No Mr. Bond, I expect you to die.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.")
    });
    test("Translate Dr. Grosh will see you now. to British English", () => {
        let input = "Dr. Grosh will see you now.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "<span class=\"highlight\">Dr</span> Grosh will see you now.")
    });
    test("Translate Lunch is at 12:15 today. to British English", () => {
        let input = "Lunch is at 12:15 today.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "Lunch is at <span class=\"highlight\">12.15</span> today.")
    });
    test("Translate We watched the footie match for a while. to American English", () => {
        let input = "We watched the footie match for a while.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "We watched the <span class=\"highlight\">soccer</span> match for a while.")
    });
    test("Translate Paracetamol takes up to an hour to work. to American English", () => {
        let input = "Paracetamol takes up to an hour to work.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "<span class=\"highlight\">acetaminophen</span> takes up to an hour to work.")
    });
    test("Translate First, caramelise the onions. to American English", () => {
        let input = "First, caramelise the onions.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "First, <span class=\"highlight\">caramelize</span> the onions.")
    });
    test("Translate I spent the bank holiday at the funfair. to American English", () => {
        let input = "I spent the bank holiday at the funfair.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.")
    });
    test("Translate I had a bicky then went to the chippy. to American English", () => {
        let input = "I had a bicky then went to the chippy.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-<span class=\"highlight\">fish-and-chip shop</span></span>.")
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        let input = "I've just got bits and bobs in my bum bag.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.")
    });
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
        let input = "The car boot sale at Boxted Airfield was called off.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.")
    });
    test("Translate Have you met Mrs Kalyani? to American English", () => {
        let input = "Have you met Mrs Kalyani?";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?")
    });
    test("Translate Prof Joyner of King's College, London. to American English", () => {
        let input = "Prof Joyner of King's College, London.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.")
    });
    test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
        let input = "Tea time is usually around 4 or 4.30.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.")
    });
    test("Highlight translation in Mangoes are my favorite fruit.", () => {
        let input = "Mangoes are my favorite fruit.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
    });
    test("Highlight translation in I ate yogurt for breakfast.", () => {
        let input = "I ate yogurt for breakfast.";
        let result = translator.americanToBritish(input);
        assert.strictEqual(result.translation, "I ate <span class=\"highlight\">yoghurt</span> for <span class=\"highlight\">brekkie</span>.")
    });
    test("Highlight translation in We watched the footie match for a while.", () => {
        let input = "We watched the footie match for a while.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "We watched the <span class=\"highlight\">soccer</span> match for a while.")
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
        let input = "Paracetamol takes up to an hour to work.";
        let result = translator.britishToAmerican(input);
        assert.strictEqual(result.translation, "<span class=\"highlight\">acetaminophen</span> takes up to an hour to work.")
    });
});
