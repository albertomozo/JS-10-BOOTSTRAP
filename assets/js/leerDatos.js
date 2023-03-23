export function leerDatos(datos)
{
    console.log('FETCH :  ' + datos)
    fetch(datos)
    .then(response => {    
    if (response.ok)
        return response.text()
        else
        throw new Error(response.status);
    })
    .then(data => {
        // sentencias a ejecutar

        return  JSON.parse(data);
        //console.log("Datos: " + data);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    });
}
  