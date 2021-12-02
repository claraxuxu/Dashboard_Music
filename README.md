# B-DEV-500-LYN-5-1-dashboard-yuhui.xu

# Introduction

Clac board est un dashboard musique, il contient 3 services qui sont deezer, spotify et youtube pour nos utilisateurs. Vous pouvez ajouter les widgets que vous voulez sur ce platform.
<br/>

# Frontend - ReactJS
#### Introduction de ReactJS
React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d'une seule page. Elle est utilisée pour gérer la couche d'affichage des applications web et mobiles. React nous permet également de créer des composants d'interface utilisateur réutilisables.
<br/>
#### Pourquoi nous avons choisi ReactJS?
React nous permet de créer de grandes applications web qui peuvent modifier les données, sans avoir à recharger la page. L'objectif principal de React est d'être rapide, évolutif et simple. Il ne fonctionne que sur les interfaces utilisateur de l'application. Cela correspond à la vue du modèle MVC. Il peut être utilisé avec une combinaison d'autres bibliothèques ou frameworks JavaScript, tels que Angular JS dans MVC.

Développer en ReactJS, la componentisation est utilisée pour extraire les éléments de la page, et l'implémentation de la page est équivalente à un mode d'assemblage. Pour les projets avec de grandes similitudes de pages, reactjs nous permet de développer plus efficacement et rapidement.
<br/>
#### Comment nous connectons les api?
Nous avons choisi Fetch à connecter avec nos apis, mais aussi avec axios par fois.

L'API Fetch fournit une interface JavaScript pour l'accès et la manipulation des parties de la pipeline HTTP, comme les requêtes et les réponses. Cela fournit aussi une méthode globale fetch() qui procure un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone.

Ici nous récupérons l'access token d'une utilisateur. L'utilisation la plus simple de fetch() prend un argument — le chemin de la ressource que nous souhaitons récupérer — et retourne une promesse (promise) contenant, en réponse, un objet (de type Response).

Bien sûr, il s'agit seulement d'une réponse HTTP, pas exactement du token. Pour extraire le contenu du token de la réponse, nous utilisons la méthode json() à transformettre

La réponse d'une requête fetch() est un objet Stream, ce qui signifie que lorsque nous appelons la méthode json(), une promesse est renvoyée puisque la lecture du flux se fera de manière asynchrone.

```js
const Sign = async () => { 
        try {
            const token_user = await fetch(`http://127.0.0.1:8080/api/account?username=${username}&password=${pwd}`, {
                method: 'GET',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            global.mytoken = await token_user.json();
        }
        catch(e) {
            console.error(e);
        }
    }
```

Axios reprend les mêmes concepts mais avec un support étendu à toutes les versions de navigateurs. Axios s’occupe automatiquement de transformer les réponses en JSON (exit le response.json()).

Il est aussi possible d’annuler une requête le catch() semble poser nettement moins de soucis qu’avec Fetch

Une requête GET avec Axios, ça ressemble à ça :
```js
axios.get(`http://127.0.0.1:8080/api/account`)
  .then(function (response) {
    return response;
  })
  .catch(function (e) {
    console.log(e);
  });
```
