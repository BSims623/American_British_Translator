const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');


suite('Functional Tests', () => {
    test("Translation with text and locale fields: POST request to /api/translate", function (done) {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "Mr. roll of toilet paper.",
                locale: "american-to-british"
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    "text": "Mr. roll of toilet paper.",
                    "translation": "<span class=\"highlight\">Mr</span> <span class=\"highlight\">bog roll</span>."
                });
                done();
            })
    });
    test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "Mr. roll of toilet paper.",
                locale: "american-to-american"
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    "error": "Invalid value for locale field"
                });
                done();
            })
    });
    test("Translation with missing text field: POST request to /api/translate", function (done) {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                locale: "american-to-british"
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    "error": "Required field(s) missing"
                });
                done();
            })
    });
    test("Translation with missing locale field: POST request to /api/translate", function (done) {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "Mr. roll of toilet paper."
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    "error": "Required field(s) missing"
                });
                done();
            })
    });
    test("Translation with empty text: POST request to /api/translate", function (done) {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "",
                locale: "american-to-american"
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    "error": "No text to translate"
                });
                done();
            })
    });
    test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
        chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "Mr Bog Roll.",
                locale: "american-to-british"
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                    "text": "Mr Bog Roll.",
                    "translation": "Everything looks good to me!"
                });
                done();
            })
    });
});
