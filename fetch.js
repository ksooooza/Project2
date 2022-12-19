import {promises as fsPromises} from 'fs'

const url = "https://www.fruityvice.com/api/fruit/all"

fetch(url)
.then((res) => res.json())
.then(data => fsPromises.writeFile("./data/fruits.json", JSON.stringify(data)))
.catch((err) => console.log("Oops something went wrong"))

