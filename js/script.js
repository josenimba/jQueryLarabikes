//URL base para las peticiones
var urlBase = 'http://localhost:8000/api';


//funcion que recpera el ID que hay en la URL
function getId(){
    var url = location.href; //url actual
    var regexp = /\?id=\d{1,}/; //expresion regular para buscar el ID

    var resultados = regexp.exec(url); //busca ?id=X en la query string

    if (resultados.length>0) {
        return resultados[0].split("=")[1]; //retorna el ID encontrado
    }else{
        return undefined; //retorna no definido
    }

}