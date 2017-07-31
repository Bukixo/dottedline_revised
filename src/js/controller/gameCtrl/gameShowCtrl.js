// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('GamesShowCtrl', GamesShowCtrl);


GamesShowCtrl.$inject =['Game', '$stateParams', '$state'];
function GamesShowCtrl(Game, $stateParams, $state) {
  const vm = this;
  vm.game = {};
  vm.game = Game.get($stateParams);
  console.log("vm game", vm.game);
  function deleteGame() {
    vm.game
      .$remove()
      .then(() => $state.go('gamesIndex'));
  }

  vm.delete = deleteGame;

}
