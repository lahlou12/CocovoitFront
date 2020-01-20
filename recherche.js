  function lolo(){

    console.log("OK");

  }

function recherche(){

var form_start = document.getElementById('add_start').value;
var form_end = document.getElementById('add_end').value;
  console.log('Je suis dans on submit')
      
      fetch('http://localhost:3000/itineraires/'+form_start+"/"+form_end,{
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
          //console.log(res.itineraire)
          localStorage.setItem('list_itineraire', JSON.stringify(res.itineraire));
      })

      .catch((error)=>{
        console.log(error)
      })
}



