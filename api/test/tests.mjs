import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import server from '../connect.mjs';
import sequelize from '../connect.mjs';
import DataTypes from 'sequelize';
let should = chai.should();


chai.use(chaiHttp);

//*            TESTS           */

/*
  * Test the /GET route
  */

describe('/GET teams', () => {
    it('should get all teams', function(done) {
        request(server)
        .get('/allTeams')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          res.body[0].should.have.property('name');
          res.body[0].should.have.property('Coach');
          res.body[0].should.have.property('Players');
          res.body[0].Players.should.be.a('array');
          done();
        });
    });
});

describe('/GET coachs', () => {
  it('should get all coachs', function(done) {
      request(server)
      .get('/allCoach')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(9);
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('Teams');
        res.body[0].Teams.should.be.a('array');
        res.body[0].Teams[0].should.have.property('Players');
        res.body[0].Teams[0].Players.should.be.a('array');
        done();
      });
  });
});

describe('/GET players', () => {
  it('should get all players', function(done) {
      request(server)
      .get('/allPlayers')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(25);
        res.body[0].should.have.property('username');
        res.body[0].should.have.property('Team');
        res.body[0].Team.should.have.property('Coach');
        done();
      });
  });
});

/*
  * Test the /POST route
  */
describe('/POST login', () => {
  it('it should login a coach ', (done) => {
    let user = {
      "username": "ablo110",
      "password": "123456",
      "statut": "coach"
    } 
    chai.request(server)
    .post('/login')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('name');
      res.body.should.have.property('Teams');
      res.body.Teams.should.be.a('array');
      res.body.Teams[0].should.have.property('Players');
      res.body.Teams[0].Players.should.be.a('array');
      done();
    });
  });

  it('it should login a player ', (done) => {
    let user = {
      "username": "ablo340",
      "password": "123456",
      "statut": "player"
    } 
    chai.request(server)
    .post('/login')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('name');
      res.body.should.have.property('position');
      res.body.should.have.property('Team');
      res.body.Team.should.be.a('object');
      res.body.Team.should.have.property('Coach');
      res.body.Team.Coach.should.be.a('object');
      res.body.Team.should.have.property('Players');
      res.body.Team.Players.should.be.a('array');
      done();
    });
  });

  it('it shouldnt login a player ', (done) => {
    let user = {
      "username": "ablo340",
      "password": "1234567",
      "statut": "player"
    } 
    chai.request(server)
    .post('/login')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('error').eql('Connexion echouee');
      done();
    });
  });
});