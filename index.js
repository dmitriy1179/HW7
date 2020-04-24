//1
var a = m => alert (`${m}`)
a("Привет!")

var cube = b => b**3
console.log(cube(3))

var avg2 = (b = 0, c = 0) =>  (b + c) / 2
console.log(avg2(1, 2))
console.log(avg2(10, 5))

var sum3 = (a = 0, b = 0, c = 0) => a + b + c
console.log(sum3(1,2,3))
console.log(sum3(5,10,100500))
console.log(sum3(5,10))

var intRandom = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.round(Math.random ()*(max - min) + min)
}      
console.log(intRandom(2, 15))
console.log(intRandom(-1, -1))
console.log(intRandom(0, 1))
console.log(intRandom(10))

function greetAll(name) {
    let str ="";
    for (let i = 1; i < arguments.length; i++) {
        str += `, ${arguments[i]}`;
    }
    return alert("Hello, " + name + str);
}
greetAll("Superman")
greetAll("Superman", "SpiderMan")
greetAll("Superman", "SpiderMan", "Captain Obvious")

function sum () {
    let k = 0
    for (let i = 0; i < arguments.length; i++) {
        k+= arguments[i]
    }
    return k 
}
console.log(sum(1))
console.log(sum(2))
console.log(sum(10, 20, 40, 100))

var aSample = () => a("Привет!") 

var cubeSample = () => {
    cube(5); 
    alert(`${cube(5)}`)
}
var avg2Sample = () => {
    avg2(1, 2); 
    alert(`${avg2(1, 2)}`);
    avg2(10, 5); 
    alert(`${avg2(10, 5)}`);
}
var sum3Sample = () => {
    sum3(1,2,3);
    alert(`${sum3(1, 2, 3)}`);
    sum3(5,10,100500);
    alert(`${sum3(5, 10, 100500)}`);
    sum3(5,10);
    alert(`${sum3(5, 10)}`)
}
var intRandomSample = () => {
    intRandom(2, 15);
    alert(`${intRandom(2, 15)}`);
    intRandom(-1, -1);
    alert(`${intRandom(-1, -1)}`);
    intRandom(0, 1);
    alert(`${intRandom(0, 1)}`);
    intRandom(10);
    alert(`${intRandom(10)}`)
}
var greetAllSample = () => {
    greetAll("Superman");
    greetAll("Superman", "SpiderMan");
    greetAll("Superman", "SpiderMan", "Captain Obvious") 
}
var sumSample = () => {
    sum(1);
    alert(`${sum(1)}`);
    sum(2);
    alert(`${sum(2)}`);
    sum(10, 20, 40, 100);
    alert(`${sum(10, 20, 40, 100)}`)
}
var sample = prompt("Введите название задания")
switch (sample.toLowerCase()){
    case "a": aSample()
            break;
    case "cube": cubeSample()
            break;
    case "avg2": avg2Sample()
            break;
    case "sum3": sum3Sample()
            break;
    case "intrandom": intRandomSample()
            break;
    case "greetall": greetAllSample()
            break;
    case "sum": sumSample()
            break;
    default: alert("Вы ввели несуществующее задание")
}

let massFunction = {
    a: aSample,
    cube: cubeSample,
    avg2: avg2Sample,
    sum3: sum3Sample,
    intrandom: intRandomSample,
    greetall: greetAllSample,
    sum: sumSample
}
let key = prompt("Введите название задания")
if (key in massFunction) {
    massFunction[key]()
} else {
    alert("Вы ввели несуществующее задание")
}

//2
var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]
function sortKey(masObj, key, k = true) {
    let result = []
    if (k === false) {
        result = masObj.sort(function (a, b) {
            if (a[key] < b[key]) {
                return 1;
            }
            return -1;
        })
    } else {
        result = masObj.sort(function (a, b) {
            if (a[key] > b[key]) {
                return 1;
            }
            return -1;
        })
    }
    return result
}
console.log(sortKey(persons, "name", false))

//3
let arr = ["1", {}, null, undefined, "500", 700]
const f = x  => {
    if (typeof x === "string") {
        return +x
    } else {
        return x
    }
}
console.log(arr)
console.log(arr.map(f))

//4
let arr1 = ["0", 5, 3, "string", null]
const f1 = (x, y) => {
    if (typeof y === "number") {
        x *= y
    }
    return x
}
console.log(arr1)
console.log(arr1.reduce(f1, 1))

//5
var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};
function filter(obj, f) {
    let obj1 = {};
    for (i in obj) {
        if (f (i, obj[i])) {
            obj1[i] = `${obj[i]}`
        } 
    }
    return obj1
}
console.log(filter(phone,(key,value) => key == "color" || value == 2))

//6
function map(obj2, f) {
    let result = {};
    let masObj = []
    for (let i in obj2) {
        masObj.push(f (i, obj2[i]))
    }
    for (let i in masObj) {
        for (let k in masObj[i]) {
            result[k] = `${masObj[i][k]}`
        }
    }
    return result
}
console.log(map({name: "Иван", age: 17}, function(key, value){
    var result = {};
    result[key+"_"] = value + "$";
    return result;
}))

//7
function progress (a, d, n) {
    let sum = 0;
    sum += a;
    a += d;
    n--;
    if (n > 0) {
        sum += progress (a, d , n)
    } 
    return sum
}
console.log(progress(1, 2, 4))

//8
let body = {
    tagName : "body",
    tagProperty : "paired",
    subTags : [
        {
            tagName : "div",
            tagProperty : "paired",
            subTags : [
                {
                    tagName : "span",
                    tagProperty : "paired",
                    text : "Enter a data please:",
                },
                {
                    tagName : "br",
                },
                {
                    tagName : "input",
                    attrs : {
                        type : "text",
                        id : "name",
                    },
                },
                {
                    tagName : "input",
                    attrs : {
                        type : "text",
                        id : "surname",
                    },
                },
            ]
        },
        {
            tagName : "div",
            tagProperty : "paired",
            subTags : [
                {
                    tagName : "button",
                    tagProperty : "paired",
                    attrs : {
                        id : "ok"
                    },
                    text : "OK",
                },
                {
                    tagName : "button",
                    tagProperty : "paired",
                    attrs : {
                        id : "cancel"
                    },
                    text : "Cancel",
                },
            ]
        }
    ]
}

function createHtmlTree (objHtml, tag, attrs, text, subTags, tagProperty) {
    var str1 ="";
    str1 += `<${objHtml[tag]}`
    if (attrs in objHtml) {
        for (let i in objHtml[attrs]) {
            str1 += ` ${i} = "${objHtml[attrs][i]}"`
        }
    }
    str1 += `>\n`
    if (text in objHtml) {
        str1 += `${objHtml[text]}\n`
    }
        if (subTags in objHtml) {
        for (let k in objHtml[subTags]) {
            str1 += createHtmlTree(objHtml[subTags][k], tag, attrs, text, subTags, tagProperty)
        }
    }
    if (tagProperty in objHtml) {
        str1 += `</${objHtml[tag]}>\n`
    }
    return str1
}

console.log (createHtmlTree(body, "tagName", "attrs", "text", "subTags", "tagProperty"))
document.write(createHtmlTree(body, "tagName", "attrs", "text", "subTags", "tagProperty"))
