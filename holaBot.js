var builder = require('botbuilder'); // invocamos al bot builder -> requerimos el paquete
var connector = new builder.ConsoleConnector().listen(); // el conector, nos permite unir consola con bot
var bot = new builder.UniversalBot(connector); // bot que escucha consola

// DEFINIMOS UN DIALOGO RAIZ ('/'), recibe un arreglo de funciones (cada funcion es una manera de interactuar con el usuario )
bot.dialog('/',[
    function(session){
        session.send('Hola Mundo!');
    }
])
