
function load_user(){

  var id_user = localStorage.getItem('user_id');

      
      fetch('http://localhost:3000/users/'+id_user,{
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
          //console.log(res.user);
          localStorage.setItem('infos_user', JSON.stringify(res.user));
      })

      .catch((error)=>{
        console.log(error)
      })

}


function modifier_profil(){

      id = localStorage.getItem('user_id');

      var form_mail = document.getElementById('email').value;
      var form_name = document.getElementById('name').value;
      var form_prenom = document.getElementById('prenom').value;
      var form_birth = document.getElementById('birth').value;
      var form_pass = document.getElementById('pass').value;
      var form_pass2 = document.getElementById('pass2').value;
      var form_immat = document.getElementById('immat').value;
      var form_modelV = document.getElementById('modelV').value;
      var form_bio = document.getElementById('bio').value;

  data = {
    name: form_name,
    mail: form_mail,
    prenom: form_prenom,
    dateNaissance: form_birth,
    motDePasse: form_pass,
    matricule: form_immat,
    modelVoiture: form_modelV,
    biographie: form_bio
  }

      fetch('http://localhost:3000/'+id,{
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

function delete_account(){


var id_user = localStorage.getItem('user_id');

      
      fetch('http://localhost:3000/users/'+id_user,{
        method: 'DELETE',
        mode: "cors",
        headers: {"Content-Type": "application/json"}
      })
      .then((res)=>{
        return new Promise((resolve,reject)=>{
            resolve (res.json())
        })
      })

      .then((res)=>{
          console.log(res)
      })

      .catch((error)=>{
        
        console.log(reject)
      })
    }
  
