function connect(){


var form_mail = document.getElementById('email').value;
var form_pass = document.getElementById('pass').value;
  console.log('Je suis dans on submit')
const data = {
    mail: form_mail,
    motdepasse: form_pass,
  }
      console.log(data)
      
      fetch('http://localhost:3000/users/login/',{
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
          console.log(res)
          localStorage.setItem('user_id', res.user_id);
          window.location.replace("../html/index.html");
      })

      .catch((error)=>{
        
        console.log(reject)
      })
    }
  
