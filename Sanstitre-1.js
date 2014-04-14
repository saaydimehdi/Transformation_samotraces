// JavaScript Document

var famille = [];
famille.push({
    
        date: "02/01/2014:00:51:33",
        even: "trace:update:obsel",
        idObs:[ 
            2,
            3
        ],
        timestamp: [3],
        type: ["carre"],
        attributes: {
            "couleur": "jaune"
        },
        attributesValue: ["rouge"],
		
        idObsTransformé: 2,
        timestampTransformé: 10,
        typeTransformé: "cercle",
        attributesTransformé: "couleur",
        attributesValueTransformé: "bleu"
  

	
	/*date: "02/01/2014:00:51:33", 
              even:"trace:update:obsel" ,
			  idObs:1,
			  timestamp:2,
			  type:"cercle",
			  attributes:"couleur",
			  attributesValue:"rouge",
			  idObs:2,
			  timestamp:3,
			  type:"carre",
			  attributes:"couleur",
			  attributesValue:"rouge",
			  
			  idObsTransformé:2,
			  timestampTransformé:10,
			  typeTransformé:"cercle",
			  attributesTransformé:"couleur",
			  attributesValueTransformé:"bleu",
			  */

});
famille ;
var texte = JSON.stringify(famille);
//document.write(texte);
var mon_objet = JSON.parse(texte);

alert(mon_objet[0].attributes);

var te = SON.stringify(mon_objet[0].attributes);
alert(te);
//alert(texte);
//texte ;