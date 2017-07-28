const router = require('express'). Router();

const playersController = require('../controllers/player');
const gamesController =  require('../controllers/game');

///--------- PLAYER ------------///
router.route('/players')
  .get(playersController.index)
  .post(playersController.create);

router.route('/players/:id')
  .get(playersController.show)
  .put(playersController.update)
  .delete(playersController.delete);

///////////========= GAME =============//////////

router.route('/games')
  .get(gamesController.index)
  .post(gamesController.create);

router.route('/games/:id')
  .get(gamesController.show)
  .put(gamesController.update)
  .delete(gamesController.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
