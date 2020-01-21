
function recherche_trajet_user(){


      var id = localStorage.getItem('user_id')
      
      fetch('http://localhost:3000/users/'+id,{
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
          //console.log(res.user.idTrajetConducteur);
          localStorage.setItem('trajet_conducteur', JSON.stringify(res.user.idTrajetConducteur));
          //document.location.reload(true);
      })

      .catch((error)=>{
        console.log(error)
      })


}


function get_adresse(id){

      //console.log(id);
      
        //console.log(i);
        //console.log(arr_trajet[i]);
        new Promise((resolve,reject)=>{
            fetch('http://localhost:3000/itineraires/'+id,{
            method: 'GET',
            mode: "cors",
            headers: {"Content-Type": "application/json"}
          })

          .then((res)=>{
            //console.log(o);
            return new Promise((resolve,reject)=>{
                resolve (res.json())

            })
          })


          .then((res)=>{
            //console.log(res.itineraire);
            //res_array.push(res.itineraire)
            //console.log(JSON.stringify(res.itineraire));

            //console.log(localStorage.getItem('value_trajet'));

            localStorage.setItem('value_trajet'+id, JSON.stringify(res.itineraire));
            
              //document.location.reload(true);
          })

          .catch((error)=>{
            console.log(error)
          })
        })
        

        //res_array[i] = JSON.parse(localStorage.getItem('itineraire_list'));
      
  }

      
  




