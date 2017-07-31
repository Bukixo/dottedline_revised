angular
  .module('dl_app')
  .controller('PlayersNewCtrl', PlayersNewCtrl);

PlayersNewCtrl.$inject = ['Player', '$state'];
function PlayersNewCtrl(Player, $state) {
  const vm = this;
  vm.player = {};

  function playersCreate() {
    Player
      .save(vm.player)
      .$promise
      .then(() => $state.go('playersIndex'));
  }
  vm.create = playersCreate;
}
