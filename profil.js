async function delete_account(){

  var id_user = "5e2457050b4c16b5b368c6a2"
  var test = "ok";


  const requestOptions = {
      method: 'DELETE',
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
  };

  console.log(data)
  alert("2");
     const  response = await fetch("http://localhost:3234/users/login/"+id_user, requestOptions)
     alert("3")
      const json = await response.json();
      alert("4")
      console.log(json);
      alert("5");
      
      }
