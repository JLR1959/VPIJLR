/* ======================================================
MODULE 1
CONFIGURATION ENTREPRISE CLIENT
====================================================== */

const CONFIG_CLIENT = {

nomEntreprise : "Entreprise cliente",

nomCommercial : "Vérification préventive immobilière",

sousTitre : "Logiciel professionnel de vérification préventive immobilière",

courriel : "contact@entreprise.com",

telephone : "000-000-0000",

numeroEntreprise : "Numéro entreprise",

tps : "TPS 000000000",

tvq : "TVQ 000000000",

logo : "assets/logo-default.png",

sceau : "assets/sceau-default.png"

};



/* ======================================================
MODULE 2
REMPLISSAGE INTERFACE
====================================================== */

function chargerInterfaceClient(){

const logo = document.getElementById("client-logo");

if(logo){
logo.src = CONFIG_CLIENT.logo;
}



const nomEntreprise = document.getElementById("client-nom-entreprise");

if(nomEntreprise){
nomEntreprise.textContent = CONFIG_CLIENT.nomEntreprise;
}



const nomCommercial = document.getElementById("client-nom-commercial");

if(nomCommercial){
nomCommercial.textContent = CONFIG_CLIENT.nomCommercial;
}



const sousTitre = document.getElementById("client-sous-titre");

if(sousTitre){
sousTitre.textContent = CONFIG_CLIENT.sousTitre;
}



const contact = document.getElementById("client-contact-ligne");

if(contact){

contact.textContent =
CONFIG_CLIENT.courriel + " | " +
CONFIG_CLIENT.telephone;

}



const legal1 = document.getElementById("client-legal-ligne-1");

if(legal1){
legal1.textContent = CONFIG_CLIENT.numeroEntreprise;
}



const legal2 = document.getElementById("client-legal-ligne-2");

if(legal2){

legal2.textContent =
CONFIG_CLIENT.tps + " | " +
CONFIG_CLIENT.tvq;

}

}



/* ======================================================
MODULE 3
REMPLISSAGE RAPPORT PDF
====================================================== */

function chargerRapportClient(){

const logoRapport =
document.getElementById("rapport-client-logo");

if(logoRapport){
logoRapport.src = CONFIG_CLIENT.logo;
}



const nomEntrepriseRapport =
document.getElementById("rapport-client-nom-entreprise");

if(nomEntrepriseRapport){
nomEntrepriseRapport.textContent =
CONFIG_CLIENT.nomEntreprise;
}



const nomCommercialRapport =
document.getElementById("rapport-client-nom-commercial");

if(nomCommercialRapport){
nomCommercialRapport.textContent =
CONFIG_CLIENT.nomCommercial;
}



const sousTitreRapport =
document.getElementById("rapport-client-sous-titre");

if(sousTitreRapport){
sousTitreRapport.textContent =
CONFIG_CLIENT.sousTitre;
}



const contactRapport =
document.getElementById("rapport-client-contact-ligne");

if(contactRapport){

contactRapport.textContent =
CONFIG_CLIENT.courriel + " | " +
CONFIG_CLIENT.telephone;

}



const legalRapport1 =
document.getElementById("rapport-client-legal-ligne-1");

if(legalRapport1){
legalRapport1.textContent =
CONFIG_CLIENT.numeroEntreprise;
}



const legalRapport2 =
document.getElementById("rapport-client-legal-ligne-2");

if(legalRapport2){

legalRapport2.textContent =
CONFIG_CLIENT.tps + " | " +
CONFIG_CLIENT.tvq;

}



const signatureEntreprise =
document.getElementById("rapport-signataire-entreprise");

if(signatureEntreprise){
signatureEntreprise.textContent =
CONFIG_CLIENT.nomEntreprise;
}



const legalEntreprise =
document.getElementById("rapport-entreprise-legale");

if(legalEntreprise){
legalEntreprise.textContent =
CONFIG_CLIENT.nomEntreprise;
}

}



/* ======================================================
MODULE 4
CHARGEMENT AU DÉMARRAGE
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

chargerInterfaceClient();

chargerRapportClient();

});
