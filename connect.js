async function connect(){

  var form_mail = document.getElementById('email').value;
  var form_pass = document.getElementById('pass').value;
  var test = "ok";

      // alert(form_pass);
      // alert(form_mail);
      alert(test);

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

     const  response = await fetch("http://localhost:3000/users/login/", requestOptions)
      const json = await response.json();
      alert(json);
      alert("non")
      
      }
