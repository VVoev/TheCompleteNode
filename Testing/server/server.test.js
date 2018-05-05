const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


describe('Testing routes', () => {
    it('/ should return Hello', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                })
            })
            .end(done);
    });

    it('/users should return all users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    firstname: 'petko',
                    age: 28,
                    car: 'vw'
                })
            })
            .end(done);
    })
})