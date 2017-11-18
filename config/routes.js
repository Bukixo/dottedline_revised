const router = require('express'). Router();

const playersController = require('../controllers/player');
const gamesController =  require('../controllers/game');
const clubsController =  require('../controllers/club');

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

  ///////////========= Club =============//////////

router.route('/clubs')
  .get(clubsController.index)
  .post(clubsController.create);

router.route('/clubs/:id')
  .get(clubsController.show)
  .put(clubsController.update)
  .delete(clubsController.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
