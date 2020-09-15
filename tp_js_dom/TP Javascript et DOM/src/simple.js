// Créez un objet avec une propriété de votre choix
// Ajoutez dans un second temps une propriété de type booléen
// Retournez l'objet
function createObject() {
	function objet(propriété) {
		this.propriété = propriété;
		this.booleen = true



	}

	var objet_1 = new objet();
	return objet_1

}

console.log(createObject());

// Retournez un objet avec trois propriétés :
// - val1: la valeur du paramètre v1
// - absVal2: la valeur absolue du paramètre v2
// - somme de v1 et v2
function additionObject(v1, v2) {

	function objet() {
		this.val1 = v1;
		this.absVal2 = Math.abs(v2);
		this.somme = v1 + v2;
	}

	var objet_1 = new objet()
	return objet_1

}

console.log(additionObject(2, 6));
console.log(additionObject(-5, -10));

console.log(10%2);


// Retournez un tableau avec uniquement des nombres impairs supérieurs à 0
// Si le tab passé en paramètre est null, retournez un tableau vide
function removeEvenNumbers(tab) {

	
	var tab_imp = []

	if(tab !== null && tab.length >= 1)	{

		
	
		for (var i = 0; i < tab.length ; i++)	{


			if (tab[i] % 2 !== 0 && tab[i] > 0)	{
				
				tab_imp.push(tab[i])
				
			}
			

		}

		return tab_imp		
		
	}	else	{
		
		return tab = []
	}

}

console.log(removeEvenNumbers([]));
console.log(removeEvenNumbers(null));
console.log(removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]));

// Complétez la fonction testNumNeg qui retourne vrai si au
// moins un élément du tableau en entrée est un nombre et
// qu'il a une valeur négative
function testNumNeg(tab) {
	
	

	for (var i = 0; i < tab.length ; i++)	{

		if (Number.isInteger(tab[i]) && tab[i] < 0)	{
			
			return true
			
		}

	}

}

console.log(testNumNeg([1, "kiwi", true, -2]));
console.log(testNumNeg([0, "orange", false]));
console.log(testNumNeg([0, 4, 8]));

// Complétez la fonction ci-dessous pour retourner un
// tableau contenant la table de multiplication (jusqu'à 10 inclus)
// du nombre passé en paramètre, par exemple :
// n = 5 : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
function multTable(n) {
	
	var tab_mul = []

	for (var i = 0 ; i < 11 ; i++)	{

		tab_mul.push(n*i)

	}

	return tab_mul
}

console.log("Table de multiplication de 1", multTable(1));
console.log("Table de multiplication de 5", multTable(5));

// En utilisant une boucle et la fonction précédente,
// retournez un tableau contenant toutes les tables de multiplication
// (jusqu'à 10 inclus) pour les nombres allant de 0 à la valeur d'un
// paramètre max (inclus)
function multTables(max) {
	
	var tab_all_mul = []

	for	(var j = 0; j < max+1 ; j++ ){

		var tab_mul = []
		tab_all_mul.push(tab_mul)
	
		for (var i = 0 ; i < 11 ; i++)	{

			tab_mul.push(j*i)

		}

	}

	return tab_all_mul

}

console.log(multTables(5));

const products = [{
		model: "Xiaomi Mi 9",
		size: "74.7 mm X 157.5 mm X 7.6 mm",
		weight: "173"
	},
	{
		model: "Samsung Galaxy A21",
		size: "75.3 mm X 163.7 mm X 9.0 mm",
		weight: "192"
	}
];

// Modifiez la fonction pour qu'elle compte le nombre de caractères
// de chaque string contenu dans l'objet passé en paramètre (excluez les espaces)
// Remplacez chaque chaîne par sa taille uniquement dans le contexte de la fonction
// Le console.log suivant l'appel à la fonction howLongIsIt fonction doit toujours
// afficher l'objet de base
// Vous ne devez pas créer d'objet à l'intérieur de la fonction,
// ni utiliser de variable globale
function howLongIsIt(obj) {
	
	
	for (var i = 0; i < Object.keys(obj).length ; i++)	{
		
		
		var obj_prop = Object.keys(obj)[i]

		obj[obj_prop] = obj[obj_prop].length
		
		
	}


	
}

// Vous devriez avoir à modifier cette ligne...

var newProduct0 = Object.assign({}, products[0])
howLongIsIt(newProduct0)
console.log(products[0]);


/* doit afficher :
{
	model: "Xiaomi Mi 9",
	size: "74.7 mm X 157.5 mm X 7.6 mm",
	weight: "173"	
}
*/

console.log(newProduct0);
/* doit afficher :
{
	model: 11,
	size: 27,
	weight: 3
}
*/

// Complétez votre code avec une fonction transformant tous les objets
// compris dans le tableau passé en paramètre de la même manière que précédemment
function howLongIsItTab(tab) {
	

	for ( let product of tab)	{

		for ( let prop in product)	{

			product[prop] = product[prop].replaceAll(' ', '').length

		}
		
			
	}
	
}

// Vous devriez avoir à modifier cette ligne...


let newProducts = products.map(e => Object.assign({}, e));
newProducts = howLongIsItTab(newProducts)
console.log(products);
console.log(newProducts);