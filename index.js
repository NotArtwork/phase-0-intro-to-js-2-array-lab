// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
   const new_cats = [
    ...cats.slice(0),
    name
    ]
    return new_cats
}

function prependCat(name) {
    const new_cats = [
        name,
     ...cats.slice(0),
     
     ]
     return new_cats
 }
 
 function removeLastCat() {
    const new_cats = [ 
        ...cats.slice(0, -1)
    ]
     return new_cats
 }

 function removeFirstCat() {
    const new_cats = [
        ...cats.slice(1)
    ]
    return new_cats
 }
 