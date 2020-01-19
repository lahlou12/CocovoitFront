

async function delete_account(){

  var id_user = "5e2457050b4c16b5b368c6a2"
  var test = "ok";


  const requestOptions = {
      method: 'DELETE',
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
  };

     const  response = await fetch("http://localhost:3234/users/:"+id_user, requestOptions)
      const json = await response.json();
      console.log(json);
      
      }
