angular.module('Hackathon')
    .controller('homeCtrl', hControl)

hControl.$inject = ['hackFact'];

function hControl(hackFact) {
    var mCtrl = this;
    var mCtrl.music = [];

    console.log('music loaded');

    mCtrl.getMusic = function(){
       // GET:/pokemon?poke=bulbasaur
       console.log("GET: ", mCtrl.albumName)

       $http.get('/music?album='+mCtrl.music).then(
           function success(response) {
               // once we set pCtl.pokemon with updated data, that info
               // is immediately carried forward into our job application form
               mCtrl.music = response.data;
               console.log("Returned:", mCtrl.music)
           }, function failure(response) {
               // here we do nothing if we can't find the selected pokemon,
               // but in reality we'd probably put up an alert or otherwise
               // notify the user that that pokemon doesn't exist in our database
               console.log("GET:/music?album= error:", response)
           }
       )
   }
   function postThings(thingData) {

       return $http.post('/handleform', musicData);
   }
}
