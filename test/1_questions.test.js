const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;
const app = require('../api-backend/app');
require('custom-env').env('localhost'); 

const valid_question_sequence = 4;

const invalid_question_sequence = 50;

const valid_quesstionnaire_id = 1;

const invalid_quesstionnaire_id = 100;

let response;

describe('Test if question and questionnaire ID are valid (Get Request: {baseurl}/question/:questionnaireID/:questionID)', () => {
    it('Should return totals with status 200', (done) => {
        request(app)
        .get('/inteliq_api/question/' + valid_quesstionnaire_id + '/' + valid_question_sequence)
        .end((err, res) => {
            response = res.body;
            expect(res.status).to.eq(200);
            done()
        })
        })

  
});


describe('Test if question and questionnaire ID are valid (Get Request: {baseurl}/question/:questionnaireID/:questionID)', () => {
    it('Should return totals with status 400', (done) => {
        request(app)
        .get('/inteliq_api/question/' + invalid_quesstionnaire_id + '/' + invalid_question_sequence)
        .end((err, res) => {
            response = res.body;
            expect(res.status).to.eq(400);
            done()
        })
        })

   
});
