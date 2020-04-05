let options = { // объект
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false; // добавление в объект
options.colors = { // добавление ключа которы имеет объект
    border: "black",
    bg: "red"
};
delete options.bool; // удаление ключа bool 

console.log(options);

for (let key in options) { // работа с ключами объекта options
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
// реузультат Свойство width имеет значение 1024
//Свойство height имеет значение 1024
//Свойство name имеет значение test
//Свойство colors имеет значение [object Object]

console.log(Object.keys(options).length); // подсчет свойств в объекте 
