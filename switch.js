// variable que contiene un string o cadena de caracteres en español
var accion = 'salir';

// switch
switch(accion){
    case 'salir': {
        console.log('lleve paraguas');
    }; break;
    case 'cocinar': {
        console.log('lleve guantes');
    }; break;
    default: {
        console.log('no esta organizada la accion');
    }; break;
}

// variable tipo de dato boolean
var llover = true;

switch(llover){
    case true: {
        console.log('esta lloviendo');
    }
    default: {
        console.log('no se si esta lloviendo');
    }
}