export function leerDatos(datos) {
    return fetch(datos)
      .then(response => {    
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(response.status);
        }
      })
      .then(data => {
        console.log("Datos: " + data);
        return data;
      })
      .catch(err => {
        console.error("ERROR: ", err.message);
      });
  }
  
  