angular
.module('dl_app')
.factory('Game', Game);

Game.$inject = ['$resource'];

function Game($resource){
  const Game = $resource('/api/games/:id',
    { id: '@_id' },
    {
      'update': { method: 'PUT' }
    }
  );

  Object.defineProperty(Game.prototype, 'homeName', {
    get: function(){
      console.log('hello');
      return this.home.name;
    }
  });
  Object.defineProperty(Game.prototype, 'awayPlayerGoals', {
    get: function(){
      console.log('hello');
      return this.away.game_players[0].data.game_goals;
    }
  });
  return Game;
}
