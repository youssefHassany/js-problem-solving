let arrayOfObjects = [
    {id: 1, name: "Youssef"},
    {id: 2, name: "Logy"},
    {id: 3, name: "Peter"},
    {id: 4, name: "MJ"},
    {id: 5, name: "Messi"},
];

function mergeObjects(arr) {
    let newObj = {id: [], names: []};

    for(let i = 0; i < arr.length; i++) {
        newObj.id.push(arr[i].id);
        newObj.names.push(arr[i].name);
    }

    console.log(newObj)
    console.log(`--------------------------------------`)
    for(let i = 0; i < arr.length; i++) {
        console.log(`user ${newObj.id[i]} is named ${newObj.names[i]}`)
    }
}

mergeObjects(arrayOfObjects)