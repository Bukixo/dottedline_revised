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
      const a = this.game.home.name;
      console.log('hello');
      return a;
    }
  });
  return Game;
}
