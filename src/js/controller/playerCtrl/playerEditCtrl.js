angular
  .module('dl_app')
  .controller('PlayersEditCtrl', PlayersEditCtrl)
  .controller('PlayersStatsCtrl', PlayersStatsCtrl);

PlayersEditCtrl.$inject = ['Player', '$stateParams', '$state'];
function PlayersEditCtrl(Player, $stateParams, $state) {
  const vm = this;

  vm.player = Player.get($stateParams);

  function playersUpdate() {
    vm.player
      .$update()
      .then(() => $state.go('playersShow', $stateParams));
  }
  vm.update = playersUpdate;
}

PlayersStatsCtrl.$inject = ['Player', '$stateParams'];
function PlayersStatsCtrl(Player, $stateParams) {
  const vm = this;

  vm.player = Player.get($stateParams);

}
