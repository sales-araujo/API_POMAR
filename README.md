<div align="center">
    <h1>🍍 API - Pomar</h1>
    <i>An of free API for use in software and web development</i>
</div>
<br/>
<div align="center">
  <p>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
  </p>
  <p>
    <img src="https://img.shields.io/badge/version-1.0.0-green.svg"/>
    <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
  </p>
</div>

# GET
<p><em>GET - Request Fruits information by ID and Name of Fruit.</em></p>

```
/api/fruit/:id
```

or

```
/api/fruit/:fruit
```

## Parameter

Filds | Types | Description
|---|---|---|
id | number | Optional id value.<br/>Value pattern: `1 - 15` |
fruit | string | Optional fruit value. |

## API - Exemple: 

```
https://api-pomar.herokuapp.com/api/fruit/10
```

## ✔️ Sucess 200

Filds | Types | Description
|---|---|---|
fruit | string | Name of the Fruit. |
id | number | ID of the Fruit. |
image | string | Image of the Fruit<br/>Size pattern: `260x260`. |
genus | string | Genus of the Fruit. |
order | string | Order of the Fruit. |
nutritions | json | Nutritions of the Fruit. |
carbohydrates | number | Carbohydrates of the Fruit (per 100g) in gramm. |
protein | number | Protein of the Fruit (per 100g) in gramm. |
sugar | number | Sugar of the Fruit (per 100g) in gramm. |
calories | number | Calories of the Fruit (per 100g) in gramm. |

Sucess-response: 
|---|

```
[{
  "id": 10,
  "fruit": "Goiaba",
  "image": "https://user-images.githubusercontent.com/101731656/183269256-2a3e0b50-4549-40a1-a49a-5a5ce6486716.png",
  "genus": "Psidium",
  "order": "Myrtales",
  "nutritions": {
    "carbohydrates": 14,
    "protein": 2.6,
    "sugar": 9,
    "calories": 68
  }
}]
```

## ❌ Error 4xx

Name | Description
|---|---|
fruit | There was no fruit available with the given parameters. |

Error-response: 
|---|

```
[{
  "message": "information not found"
}]
```

# GET - Request all Fruits
<p><em>Get all Fruits available in the database in a list form.</em></p>

```
/api/fruit/all
```

## ✔️ Sucess 200

Filds | Types | Description
|---|---|---|
fruit | string | Name of the Fruit. |
id | number | ID of the Fruit. |
image | string | Image of the Fruit<br/>Size pattern: `260x260`. |
genus | string | Genus of the Fruit. |
order | string | Order of the Fruit. |
nutritions | json | Nutritions of the Fruit. |
carbohydrates | number | Carbohydrates of the Fruit (per 100g) in gramm. |
protein | number | Protein of the Fruit (per 100g) in gramm. |
sugar | number | Sugar of the Fruit (per 100g) in gramm. |
calories | number | Calories of the Fruit (per 100g) in gramm. |

Sucess-response: 
|---|

```
[{
  "id": 1,
  "fruit": "Abacaxi",
  "image": "https://user-images.githubusercontent.com/101731656/183268923-f65941d2-6637-443e-ab18-12a111aff090.png",
  "genus": "Ananas",
  "order": "Poales",
  "nutritions": {
    "carbohydrates": 12.6,
    "protein": 0.5,
    "fiber": 1.4,
    "calories": 48
  }
},
{
  "id": 2,
  "fruit": "Maçã",
  "image": "https://user-images.githubusercontent.com/101731656/183269020-b89ff3f2-4034-4347-bd74-95aca39a9f44.png",
  "genus": "Malus",
  "order": "Rosales",
  "nutritions": {
    "carbohydrates": 11.4,
    "protein": 0.3,
    "sugar": 10.3,
    "calories": 52
  }
}]
```

## ❌ Error 4xx

Name | Description
|---|---|
fruit | There occured an error in the server. |

Error-response: 
|---|

```
[{
  "message": "information not found"
}]
```



