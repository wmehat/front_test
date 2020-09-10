// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
// votre code

var body = document.body
body.style.backgroundColor = '#992323'

// Changez la couleur du texte du body en #fff
// votre code

body.style.color = '#fff'

// Supprimez la ligne suivante
var workspace = document.getElementById('workspace')
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
// votre code

// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
// votre code
console.log(workspace.children);


// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
var p = workspace.children[0];
// Affectez le résultat à la variable p
// votre code
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
// votre code

var h3 = document.createElement('h3')
h3.innerHTML = 'Hello JS world!'
workspace.insertBefore(h3, p)

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
function runChrono(n) {
  
  var compteur = n
  var div = document.createElement('div')
  div.setAttribute('id', 'counter')
  workspace.insertBefore(div, p)



  setInterval( function() {

    div.innerHTML = compteur

    if (compteur == 0 ) {
      return
    }

    compteur -= 1



  }, 1000) 


  

}

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
// votre code


var bouton = document.createElement('button')
bouton.innerHTML = 'Start countdown'
workspace.insertBefore(bouton, h3.nextSibling)

bouton.addEventListener('click', function() {

  if (workspace.children[2].id == 'counter')  {
    workspace.children[2].remove()
    
  }

  
  runChrono(10)

})
