async function connect(){

  var form_mail = document.getElementById('email').value;
  var form_pass = document.getElementById('pass').value;
  var test = "ok";

      // alert(form_pass);
      // alert(form_mail);
      alert("1");

  data = {
    mail: form_mail,
    motdepasse: form_pass,
  }

  const requestOptions = {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
  };

  console.log(data)
  alert("2");
     const  response = await fetch("http://localhost:3234/users/login/", requestOptions)
     alert("3")
      const json = await response.json();
      alert("4")
      console.log(json);
      alert("5");
      
      }
