angular
  .module('dl_app')
  .controller('GamesEditCtrl', GamesEditCtrl);


GamesEditCtrl.$inject = ['Game', '$stateParams', '$state'];
function GamesEditCtrl(Game, $stateParams, $state) {
  const vm = this;

  vm.Game = Game.get($stateParams);

  function GamesUpdate() {
    vm.Game
      .$update()
      .then(() => $state.go('GamesShow', $stateParams));
  }
  vm.update = GamesUpdate;
}
