/*jshint esversion: 6 */

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

/*
 * Button-Event-Handler.
 */
function onButtonKlickEventHandler() {

    const jQueryObjekt = $(".roteSchrift"); // Selektion anhand CSS-Klasse

    console.log("Anzahl Elemente gefunden: " + jQueryObjekt.length );

    jQueryObjekt.toggleClass("hintergrundGelb");
}


$( document ).ready( function() {

    $("#buttonCssUmschalten" ).click( onButtonKlickEventHandler );
    console.log("Event-Handler für Button registriert.");
});