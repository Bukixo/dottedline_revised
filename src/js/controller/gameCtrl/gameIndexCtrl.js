angular
  .module('dl_app')
  .controller('GamesIndexCtrl', GamesIndexCtrl);

GamesIndexCtrl.$inject = ['Game'];
function GamesIndexCtrl(Game){
  const vm = this;
  vm.all = Game.query();
  //console.log(vm.all);
}
