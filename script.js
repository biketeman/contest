//biliothèque de mots
let words = ['tissu', 'par', 'pars', 'faire', 'la', 'pose', 'terre', 'le', 'les', 'mes', 'arbre', 'finir', 'huile', 'quel', 'avoir', 'palme', 'seul', 'tilleul', 'comprendre',
'utile', 'perdre', 'falloir', 'pratique', 'nu', 'qualité', 'outre', 'enterrement', 'damin', 'glage', 'chaleur', 'ici', 'tous', 'metro', 'vent', 'itinéraire', 'parallèle', 'sanguin',
'sérum', 'vernis', 'poudre', 'plante', 'radiateur', 'prise', 'ville', 'course', 'trente', 'sinus', 'vernis', 'claque', 'possible', 'serrein', 'saint', 'église', 'climatisation',
'palace', 'entretien', 'terroir', 'luxe', 'pétrole', 'archéologie', 'tamanoir', 'poubelle', 'prétendre', 'poulet', 'pastèque', 'aléatoire', 'parenthèse', 'pluie', 'oseille', 'tarif',
'verrue', 'artiste', 'hachoir', 'tuez', 'le', 'la', 'les', 'ma', 'mon', 'mes', 'lui', 'elle', 'île', 'tracer', 'plaque', 'dent', 'masse', 'avion', 'baignoire', 'cercueil', 'dominée', 'arraignée',
'garage', 'éléphant', 'grille', 'faillite', 'harmonie', 'itinéraire', 'joie', 'koala', 'lit', 'mère', 'natalité', 'opium', 'parents', 'qualité', 'rat', 'salir', 'talent', 
'un', 'une', 'voie', 'wagon', 'yaourt', 'périple', 'vanité', 'pensant', 'éliminer', 'qui', 'tromper', 'mélanger', 'ternir', 'assombrir', 'se', 'ses', 'son', 'sa', 'accueuil',
'péril', 'dormant', 'diluer', 'déodorant', 'ozone', 'guerre', 'fusil', 'pierre', 'blé', 'deuil', 'écarter', 'moquer', 'tête', 'océan', 'arrivage', 'contenir', 'diffuser', 'prétendre',
'prémunir', 'tribunal', 'injonction', 'selon', 'tout', 'toutes', 'mettre', 'amour', 'sachet', 'café', 'thé', 'rire', 'proposition', 'chaise', 'table', 'hétérogène', 'talent', 
'récolte', 'diva', 'mécanicien', 'cuisinier', 'si', 'école', 'être', 'passion', 'fusion', 'dépréssion', 'gastronomique', 'chef', 'poignée', 'câble', 'message', 'bouteille', 'rouge',
'jaune', 'roi', 'éléctricité', 'peur', 'lapin', 'serpent', 'loupe', 'cigarette', 'siffler']

let WordsList = []
let singleWord

//récupère un nombre aléatoire
function getRandomWord (){
    return singleWord = Math.round(Math.random()* words.length)
}

//récupère une liste de mots aléatoires
function getRandomWordList (){
    while(WordsList.length < 150){
        WordsList.push(words[getRandomWord()])
    }
	for(i = 0; i <words.length; i++){
        $('.grille').append("<h4>" + ' ' + WordsList[i] + ' ' + '</h4>');
    }
}
getRandomWordList()


console.log(WordsList)
