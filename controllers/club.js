const Club = require('../models/club');

function indexClub(req, res, next){
  Club
    .find()
    .then((clubs) => res.json(clubs))
    .catch(next);
}

function createClub(req, res, next){
  Club
    .create(req.body)
    .then((club) => res.status(201).json(club))
    .catch(next);
}

function showClub(req, res, next){
  Club
    .findById(req.params.id)
    .then((club) =>{
      if(!club) return res.notFound();
      res.json(club);
    })
    .catch(next);
}

function updateClub(req, res, next){
  Club
    .findById(req.params.id)
    .then((club) => {
      if(!club) return res.notFound();

      for(const field in req.body) {
        club[field] = req.body[field];
      }
      return club.save();
    })
    .then((club) => res.json(club))
    .catch(next);
}

function deleteClub(req, res, next){
  Club
    .findById(req.params.id)
    .then((club) => {
      if(!club) return res.notFound();
      return club.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexClub,
  create: createClub,
  show: showClub,
  update: updateClub,
  delete: deleteClub
};
