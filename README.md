# Documentation Clac-Board

Clac board est un dashboard musique, il contient 3 services qui sont deezer, spotify et youtube pour nos utilisateurs. Vous pouvez ajouter les widgets que vous voulez sur ce platform.
<br/>

# Frontend - ReactJS
## Introduction de ReactJS
React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d'une seule page. Elle est utilisée pour gérer la couche d'affichage des applications web et mobiles. React nous permet également de créer des composants d'interface utilisateur réutilisables.
<br/>
## Pourquoi nous avons choisi ReactJS?
React nous permet de créer de grandes applications web qui peuvent modifier les données, sans avoir à recharger la page. L'objectif principal de React est d'être rapide, évolutif et simple. Il ne fonctionne que sur les interfaces utilisateur de l'application. Cela correspond à la vue du modèle MVC. Il peut être utilisé avec une combinaison d'autres bibliothèques ou frameworks JavaScript, tels que Angular JS dans MVC.

Développer en ReactJS, la componentisation est utilisée pour extraire les éléments de la page, et l'implémentation de la page est équivalente à un mode d'assemblage. Pour les projets avec de grandes similitudes de pages, reactjs nous permet de développer plus efficacement et rapidement.
<br/>
## Comment nous connectons les api?
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
# How to use ClacBoard
## Connection
Cliquer sur le bouton 'sign in' en haut à droit de notre dashboard, vous pouvez voir une page comme au-dessous

Vous pouvez se connecter sur ClacBoard avec un compte Google ou avec un compte de ClacBoard.
![在这里插入图片描述](https://img-blog.csdnimg.cn/9df09eef07664996bf05648f076ee080.PNG?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAY2xhcmF4dQ==,size_1,color_FFFFFF,t_70,g_se,x_16#pic_center)
## Dashboard
![在这里插入图片描述](https://img-blog.csdnimg.cn/791733efb8504788b4744090b59ca77c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAY2xhcmF4dQ==,size_1,color_FFFFFF,t_70,g_se,x_16#pic_center)
<br/>
C'est l'acceuil de notre dashboard, en suivant la première flèche, vous pouvez ajouter un widget, il inclut 3 différentes services, il y a **Deezer**, **Napster** et **Itunes** comme choix. Vous pouvez aussi choisir le type de widget, par example les chansons les plus populaires d'un artiste ou les ranking d'un artiste.

Ensuite, avec deuxième flèche, vous pouvez donc supprimer les widgets que vous voulez plus, afin de mettre le platform plus propre ou plus à jour à vos favoris.

Et à la fin, vous pouvez mettre à jour votre widget en utilisant le troisième flèche, vous pouvez remettre un nom d'artiste.

## Discovery
![在这里插入图片描述](https://img-blog.csdnimg.cn/0e715c46f50941f4b9b25ddf15c10621.PNG?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAY2xhcmF4dQ==,size_1,color_FFFFFF,t_70,g_se,x_16#pic_center)
<br/>
Sauf la partie des services musiques, vous pouvez également vous profiter sur la partie 'Discovery'. Nous possèdons deux parties de 'fun' avec **wikipedia** et **Giphy**.

Vous pouvez utiliser cette partie même sans vous connecter sur notre ClacBoard.

J'espère que notre dashboard vous plaît!
