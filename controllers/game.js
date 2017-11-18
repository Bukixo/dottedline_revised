const Game = require('../models/game');

function indexGame(req, res, next){
  Game
    .find()
    .populate('home', 'name')
    .then((games) => res.json(games))
    .catch(next);
}

function createGame(req, res, next){
  Game
    .create(req.body)
    .then((game) => res.status(201).json(game))
    .catch(next);

}

function showGame(req, res, next){
  Game
    .findById(req.params.id)
    .populate('teams.home')
    .populate('teams.away')
    // { path: 'fans', select: 'name' }
    .then((game) =>{
      if(!game) return res.notFound();
      console.log('console.game', game);
      res.json(game);
    })
    .catch(next);

}

function updateGame(req, res, next){
  Game
    .findById(req.params.id)
    .then((game) => {
      if(!game) return res.notFound();

      for(const field in req.body) {
        game[field] = req.body[field];
      }
      return game.save();
    })
    .then((game) => res.json(game))
    .catch(next);
}

function deleteGame(req, res, next){
  Game
    .findById(req.params.id)
    .then((game) => {
      if(!game) return res.notFound();
      return game.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexGame,
  create: createGame,
  show: showGame,
  update: updateGame,
  delete: deleteGame
};
