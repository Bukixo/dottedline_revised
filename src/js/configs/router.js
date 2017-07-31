angular
  .module('dl_app')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('playersIndex', {
      url: '/',
      templateUrl: '/js/views/players/playerIndex.html',
      controller: 'PlayersIndexCtrl as playersIndex'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/js/views/about.html'
    })
    .state('playersShow', {
      url: '/players/:id',
      templateUrl: '/js/views/players/playerShow.html',
      controller: 'PlayersShowCtrl as playersShow'
    })
    .state('playersStats', {
      url: '/players/:id/stats',
      templateUrl: '/js/views/players/playerStats.html',
      controller: 'PlayersStatsCtrl as playersStats'
    })
    .state('playersEdit', {
      url: '/players/:id/edit',
      templateUrl: '/js/views/players/playerEdit.html',
      controller: 'PlayersEditCtrl as playersEdit'
    })
    .state('playersNew', {
      url: '/players/new',
      templateUrl: '/js/views/players/playerNew.html',
      controller: 'PlayersNewCtrl as playersNew'
    })
///////////------------------games-------------------//////////////

    .state('gamesIndex', {
      url: '/games',
      templateUrl: '/js/views/games/gameIndex.html',
      controller: 'GamesIndexCtrl as gamesIndex'
    })
    .state('gamesShow', {
      url: '/games/:id',
      templateUrl: '/js/views/games/gameShow.html',
      controller: 'GamesShowCtrl as gamesShow'
    })
    .state('gamesEdit', {
      url: '/games/:id/edit',
      templateUrl: '/js/views/games/gameEdit.html',
      controller: 'GamesEditCtrl as gamesEdit'
    });


  $urlRouterProvider.otherwise('/');
}
