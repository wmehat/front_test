// En utilisant l'API Fetch, récupérez sous la forme d'un objet
// JSON la table d'utilisateurs disponible à l'adresse suivante :
// https://jsonplaceholder.typicode.com/users
// Afficher la      
// Afficher la réponse dans la console
// Ajoutez au DOM une table affichant pour tous les utilisateurs
// les valeurs des propriétés suivantes : id, nom, nom de l'entreprise
// La table sera créée comme nouvel enfant de la div d'id workspace
// votre code


var workspace = document.getElementById('workspace')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data);

        for ( var i = 0 ; i < data.length ; i++ )   {

            var div_table = document.createElement('div')
            div_table.style.marginTop = '5%'
            div_table.style.marginLeft = '5%'
            workspace.appendChild(div_table)


            for ( var j = 0 ; j < Object.keys(data[i]).length ; j++ )   {


                var prop = Object.keys(data[i])[j]

                var div_prop = document.createElement('div')
                div_prop.setAttribute('id', prop)
                div_table.appendChild(div_prop)



                if (typeof data[i][prop] === 'object')  {
                    
                    div_prop.innerHTML = prop + '    :'

                    for ( var k = 0 ; k < Object.keys(data[i][prop]).length ; k++)  {

                        var prop_av = Object.keys(data[i][prop])[k]

                        var div_prop_av = document.createElement('div')
                        div_prop_av.style.marginLeft = '50px'
                        div_prop_av.setAttribute('id', prop_av)
                        div_prop.appendChild(div_prop_av)
                        

                        if (typeof data[i][prop][prop_av] === 'object')  {

                            div_prop_av.innerHTML = prop_av + '    :'
                            
                            for ( var l = 0 ; l < Object.keys(data[i][prop][prop_av]).length ; l++)  {

                                var prop_av_av = Object.keys(data[i][prop][prop_av])[l]
                                
                                var div_prop_av_av = document.createElement('div')
                                div_prop_av_av.style.marginLeft = '50px'
                                div_prop_av_av.setAttribute('id', prop_av_av)                      
                                div_prop_av.appendChild(div_prop_av_av)
                                div_prop_av_av.innerHTML = prop_av_av + '    :   ' + data[i][prop][prop_av][prop_av_av]
     
                                
                            }

                        }   else    {

                            div_prop_av.innerHTML = prop_av + '    :   ' + data[i][prop][prop_av]

                        } 
                    }

                }   else    {

                    div_prop.innerHTML = prop + '    :   ' + data[i][prop]

                }   
            }
        }
      });
    }
  )