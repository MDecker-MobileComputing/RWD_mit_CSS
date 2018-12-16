/*jshint esversion: 6 */

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


/*
 * Button-Event-Handler.
 */
function onButtonCssKlasseUmschalten() {

    const jQueryObjektMitUeberschrift = $("#ueberschrift");

    if ( jQueryObjektMitUeberschrift.hasClass("hintergrundGelb") ) {

        jQueryObjektMitUeberschrift.removeClass("hintergrundGelb");

    } else {

        jQueryObjektMitUeberschrift.addClass("hintergrundGelb");
    }

    // Als Einzeiler:
    //jQueryObjektMitUeberschrift.toggleClass("hintergrundGelb");
}


$( document ).ready( function() {

    $("#buttonCssUmschalten" ).click( onButtonCssKlasseUmschalten );
    console.log("Event-Handler für Button registriert.");
});