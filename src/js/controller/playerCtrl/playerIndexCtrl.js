// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('PlayersIndexCtrl', PlayersIndexCtrl);

PlayersIndexCtrl.$inject = ['Player'];
function PlayersIndexCtrl(Player){
  const vm = this;
  vm.all = Player.query();
  //console.log(vm.all);
}
