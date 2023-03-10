# WELCOME TO THE FUNKY FRUITY API

Have you ever wanted to know some fun info about the fruit that you are eating? Like maybe you want to know the family, genus, or order of the fruit? Or perhaps some nutritional information? Well now you can with the funkyfruityAPI.



## MODEL

Raw data taken from the Fruityvice API on the fruits can be found in the data folder in fruits.json

This is the model for each fruit:

```
    const fruitSchema = new mongoose.Schema({
    name: String,
    genus: String,
    family: String,
    order: String,
    nutrition: Object
})
```


---
## ROUTES

**"https://project2-production.up.railway.app" - landing page: Welcome to the Funky Fruity API**

<br>

---

**"https://project2-production.up.railway.app/fruits" - shows all fruits**

Example of returned content: 

```
{
    "_id": "63a1e435cf381241fe82df65",
    "name": "Blueberry",
    "genus": "Fragaria",
    "family": "Rosaceae",
    "order": "Rosales",
    "nutrition": {
      "carbohydrates": 5.5,
      "protein": 0,
      "fat": 0.4,
      "calories": 29,
      "sugar": 5.4
    },
    "__v": 0
  },
  {
    "_id": "63a1e435cf381241fe82df66",
    "name": "Cherry",
    "genus": "Prunus",
    "family": "Rosaceae",
    "order": "Rosales",
    "nutrition": {
      "carbohydrates": 12,
      "protein": 1,
      "fat": 0.3,
      "calories": 50,
      "sugar": 8
    },
    "__v": 0
  },
  {
    "_id": "63a1e435cf381241fe82df63",
    "name": "Banana",
    "genus": "Musa",
    "family": "Musaceae",
    "order": "Zingiberales",
    "nutrition": {
      "carbohydrates": 22,
      "protein": 1,
      "fat": 0.2,
      "calories": 96,
      "sugar": 17.2
    },
    "__v": 0
}
```

<br>

---

**"https://project2-production.up.railway.app/fruits/[fruitName]" - find a fruit by name**

Example: https://project2-production.up.railway.app/fruits/Durian returns:

  ```
    {
    "_id": "63a1e435cf381241fe82df6a",
    "name": "Durian",
    "genus": "Durio",
    "family": "Malvaceae",
    "order": "Malvales",
    "nutrition": {
      "carbohydrates": 27.1,
      "protein": 1.5,
      "fat": 5.3,
      "calories": 147,
      "sugar": 6.75
    },
    "__v": 0
}
```
NOTE: fruit names must be capitalized

 <br>
    
---
    
**"https://project2-production.up.railway.app/fruits/id/[fruitId]" - find a fruit by ID**

Example: https://project2-production.up.railway.app/fruits/id/63a1e435cf381241fe82df71 returns:

```
    {
    "_id": "63a1e435cf381241fe82df71",
    "name": "Guava",
    "genus": "Psidium",
    "family": "Myrtaceae",
    "order": "Myrtales",
    "nutrition": {
      "carbohydrates": 14,
      "protein": 2.6,
      "fat": 1,
      "calories": 68,
      "sugar": 9
}
```

<br>
    
---
    
**"https://project2-production.up.railway.app/fruits" - add a new fruit to the database**

Use an API platform such as postman to make a post request to add an entry to the database at this route. The new entry must have raw JSON in the body, and must follow the same format as the fruit Model.

Example:
 ![image](https://media.git.generalassemb.ly/user/46190/files/2157adee-7017-4b5e-9700-b7fa5c42f020)

<br>
    
---
    
**"https://project2-production.up.railway.app/fruits/update/id/[fruitId]" - update a fruity entry**

Use an API platform such as postman to make a post request to update an entry in database at this route. You do not have to populate every property/value pair, but the ones that you do update have to follow the format of the fruit Model.

Example:
    ![image](https://media.git.generalassemb.ly/user/46190/files/130a8a39-278c-4f4a-88bc-930184b61d1e)

 <br>
    
---
    
**"https://project2-production.up.railway.app/fruits/[fruitId]" - delete a fruit from the API using it's ID**

Use an API platform such as postman to make a delete request to delete an entry in database at this route. 

Example:
![image](https://media.git.generalassemb.ly/user/46190/files/63f5467d-e021-46f9-9a3e-e8e8b58a094a)

<br>

---

## FUTURE UPDATES

1. Add images to each entry - I considered adding image URLs to this API, however I think it would be better to have an actual image pop up with each entry. From what I read, you really couldn't do this without a front end to your API, so I would add this feature in after I built a front end.
2. On that note, building a front end for this API.



## CREDITS AND SOURCES

- https://www.fruityvice.com/ - the Fruityvice API for source data
- https://www.fruityvice.com/doc/index.html - documentation for the Fruityvice API



## SKILLS AND TOOLS USED

- MongoDB, Mongoose, Express
- Routing, Postman, CRUD
- JSON, JavaScript, Node
- Data modeling and Schemas
- Database Seeding
