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

  // Object.defineProperty(Game.prototype, 'homeName', {
  //   get: function(){
  //     console.log('hi');
  //     return this.home.name;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'homeName', {
  //   get: function(){
  //     console.log('hi');
  //     return this.name;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'homeGoals', {
  //   get: function(){
  //     console.log('hello');
  //     return this.home.game_players[0].data.game_goals;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'awayGoals', {
  //   get: function(){
  //     return this.away.game_players[0].data.game_goals;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'homeAssists', {
  //   get: function(){
  //     console.log('hello');
  //     return this.home.game_players[0].data.game_assists;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'awayAssists', {
  //   get: function(){
  //     return this.away.game_players[0].data.game_assists;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'awayPlayer', {
  //   get: function(){
  //     return this.away.game_players[0].playedBy;
  //   }
  // });
  // Object.defineProperty(Game.prototype, 'homePlayer', {
  //   get: function(){
  //     return this.home.game_players[0].playedBy;
  //   }
  // });
  return Game;
}
