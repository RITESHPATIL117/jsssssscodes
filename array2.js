const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const all_new_heros=[...marvel_heros,...dc_heros]

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array)

console.log(Array.isArray("Ritesh"))