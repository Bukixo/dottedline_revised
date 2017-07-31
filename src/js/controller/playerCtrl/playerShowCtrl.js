// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('PlayersShowCtrl',PlayersShowCtrl);

PlayersShowCtrl.$inject =['Player', '$stateParams', '$state'];
function PlayersShowCtrl(Player, $stateParams, $state) {
  const vm = this;
  vm.player = {};
  vm.player = Player.get($stateParams);

  function deletePlayer() {
    vm.player
      .$remove()
      .then(() => $state.go('playersIndex'));
  }

  vm.delete = deletePlayer;

}
