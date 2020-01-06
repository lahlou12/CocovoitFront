

var map;
var directionsManager;

    function GetMap()
    {
      map = new Microsoft.Maps.Map('#myMap', {});


        //Load the directions module.
            Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
                //Create an instance of the directions manager.
                directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

                var seattleWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: phpVars[6] });
                directionsManager.addWaypoint(seattleWaypoint);

                var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address:  phpVars[7] });
                directionsManager.addWaypoint(workWaypoint);

                //Specify where to display the route instructions.
                directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

                //Specify the where to display the input panel
                directionsManager.calculateDirections();
            });
        }

