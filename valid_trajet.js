

var map;
var directionsManager;

    function GetMap()
    {
      map = new Microsoft.Maps.Map('#myMap', {});


        //Load the directions module.
            Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
                //Create an instance of the directions manager.
                directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

                var seattleWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: localStorage.getItem('last_adresseDepart') });
                directionsManager.addWaypoint(seattleWaypoint);

                var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address:  localStorage.getItem('last_adresseArrive') });
                directionsManager.addWaypoint(workWaypoint);

                //Specify where to display the route instructions.
                directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

                //Specify the where to display the input panel
                directionsManager.calculateDirections();
            });
        }


function trajet_id(){


      //console.log('Je suis dans on submit')
      id_trajet = localStorage.getItem('id_dernier_trajet')


      fetch('http://localhost:3000/itineraires/'+id_trajet,{
        method: 'GET',
        mode: "cors",
        headers: {"Content-Type": "application/json"}
      })
      .then((res)=>{
        return new Promise((resolve,reject)=>{
            resolve (res.json())
        })
      })

      .then((res)=>{
          console.log("Resultat de la methode : "+res.itineraire.adresseDepart);
          localStorage.setItem('last_adresseDepart', res.itineraire.adresseDepart);
          localStorage.setItem('last_adresseArrive', res.itineraire.adresseArrive);
          //document.location.reload(true);
      })

      .catch((error)=>{
        console.log(error)
      })


}
trajet_id();

function candidater_trajet(){


      //console.log('Je suis dans on submit')
      id_user = localStorage.getItem('user_id');
      id_trajet = localStorage.getItem('id_dernier_trajet')

        data = {
            iduser: id_user,
          }

      fetch('http://localhost:3000/itineraires/'+id_trajet,{
        method: 'PUT',
        mode: "cors",
        body:JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
      })
      .then((res)=>{
        return new Promise((resolve,reject)=>{
            resolve (res.json())
        })
      })

      .then((res)=>{
          console.log(res);
          //document.location.reload(true);
      })

      .catch((error)=>{
        console.log(error)
      })


}

