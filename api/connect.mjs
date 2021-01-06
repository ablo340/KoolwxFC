import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import Sequelize from 'sequelize';
import DataTypes from 'sequelize';
import request from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';
let should = chai.should();

chai.use(chaiHttp);

/**         CONFIGURATIONS APP              */

export let app = express();
var upload = multer();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Content-Type', 'application/json');
    next();
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//const sqlite3 = require('sqlite3').verbose();
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});


/**           COACH               */

export const Coach = sequelize.define('Coach', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false // allowNull defaults to true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false // allowNull defaults to true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false // allowNull defaults to true
    },
    access: {
        type: DataTypes.STRING,
        allowNull: false // allowNull defaults to true
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Coach', // We need to choose the model name
    freezeTableName: true,
  
    // don't forget to enable timestamps!
    timestamps: false
  });

/*******            TEAM        */
export const Team = sequelize.define('Team', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false // allowNull defaults to true
    },
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Team', // We need to choose the model name
    freezeTableName: true,
  
    // don't forget to enable timestamps!
    timestamps: false
  });


  /**           PLAYER               */
  export const Player = sequelize.define('Player',{
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false // allowNull defaults to true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false // allowNull defaults to true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false // allowNull defaults to true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false // allowNull defaults to true
    },
    access: {
        type: DataTypes.STRING,
        allowNull: false // allowNull defaults to true
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Player', // We need to choose the model name
    freezeTableName: true,
  
    // don't forget to enable timestamps!
    timestamps: false
  });



/**             ASSOCIATIONS             */
// Setup a One-to-Many relationship between User and Grant
Player.Team = Player.belongsTo(Team);
Team.Player = Team.hasMany(Player);
Team.Coach = Team.belongsTo(Coach);
Coach.Team = Coach.hasMany(Team);


/**             REQUETES             */

app.get('/allTeams', async function (req, res) {

    // Find all Teams
    const teams = await Team.findAll({include: [{model: Coach}, {model: Player}]});
    
    res.end(JSON.stringify(teams)); // Result in JSON format
})

app.get('/allCoach', async function (req, res) {
    // Find all Coach
    const coachs = await Coach.findAll({include: {model: Team, include: Player}});
    
    res.end(JSON.stringify(coachs)); // Result in JSON format
})

app.get('/allPlayers',  async function (req, res) {
    // Find all Players
    const players = await Player.findAll({include: {model: Team, include: Coach}});
    
    res.end(JSON.stringify(players)); // Result in JSON format
    
})

app.post('/login', async function (req, res) {
    var data = {"error": "Connexion echouee"};
    switch(req.body.statut){
        case "coach":
            const coach = await Coach.findOne({
              include: {model: Team, include: Player},
                where: {
                  username: req.body.username,
                  password: req.body.password
                }
              });
            if (coach != null) {
                data = coach;
            }
            break;
        case "player":
            const player = await Player.findOne({
                include: {model: Team, include: [Coach, Player]},
                where: {
                  username:  req.body.username,
                  password: req.body.password
                }
              });
            if (player != null) {
                data = player;
            }
            break;
        default:
            data = {"error": "Ce statut n'existe pas"}
    }
    res.end(JSON.stringify(data)); // Result in JSON format
    
})

export default function nom() {
  return 0;
}

// Start server and listen on http://localhost:8081/
export let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});