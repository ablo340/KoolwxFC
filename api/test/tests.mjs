import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import app from '../connect.mjs';
import Sequelize from 'sequelize';
import DataTypes from 'sequelize';
let should = chai.should();


chai.use(chaiHttp);

/*
  * Test the /GET route
  */

/*describe('/GET teams', () => {
    it('should get all teams', () => {
        request(server)
        .get('/allTeams')
        .expect(400)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(10);
        done();
        });
    });
});*/

/*describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/sasa')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });
});*/

