function loadMapScenario() {
                Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', {
                    callback: onLoad,
                    errorCallback: onError
                });
                function onLoad() {

                    var options = { maxResults: 5 };

                    var manager = new Microsoft.Maps.AutosuggestManager(options);
                    manager.attachAutosuggest('#add_start', '#add_start_box', selectedSuggestion);

                    var end = new Microsoft.Maps.AutosuggestManager(options);
                    end.attachAutosuggest('#add_end', '#add_end_box', selectedSuggestion_end);
                }

                function onError(message) {
                    document.getElementById('printoutPanel').innerHTML = message;
                }

                function selectedSuggestion(suggestionResult) {
                    document.getElementById('add_start').innerHTML = suggestionResult.formattedSuggestion 
                }

                function selectedSuggestion_end(suggestionResult_end) {
                    document.getElementById('add_end').innerHTML = suggestionResult_end.formattedSuggestion 
                }
                
            }


function new_trajet(){

  id_user = localStorage.getItem('user_id');

  var form_user = id_user;
  var form_depart = document.getElementById('add_start').value;
  var form_arrive = document.getElementById('add_end').value;
  var form_place = document.getElementById('places').value;
  var form_prix = document.getElementById('prix').value;
  var form_date = document.getElementById('date_start').value;
  var form_heure = document.getElementById('hour').value;
  var form_description = document.getElementById('description').value;
  var form_fumer = false;
  var form_animaux = false;
  var form_manger = true;

      // alert(form_name);
      // alert(form_mail);

  data = {
      idConducteur: form_user,
      adresseDepart: form_depart,
      adresseArrive: form_arrive,
      date: form_date,
      horaire: form_heure,
      nbPlacePropose: form_place,
      prix: form_prix,
      description: form_description,
      fumer: form_fumer,
      animaux: form_animaux,
      manger: form_manger
  }


  console.log(data)

      fetch("http://localhost:3000/itineraires/",{
        method: 'POST',
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
      })

      .catch((error)=>{
        console.log(error)
      })
}


