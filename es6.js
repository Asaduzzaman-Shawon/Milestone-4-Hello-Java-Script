const num = [1,2,3,54,6,8]
const max = Math.max(...num);
// console.log(max);
// console.log(...num);

const neww = num;
// console.log(...neww);

const ob = {
    name: "glass",
    brand : "texas",
    isClean : true,
}

const k = Object.keys(ob);
const v = Object.values(ob)
// console.log(k, v);

const data = [{id: 1, name: "abul", address: "kochu khet"}];
console.log(data[0].address);

const product = {
    name: "iPhone",
    model:[
        {
            mobile: "iPhone 14",
            ram: 8,
            price: 156000
        },
        {
            mobile: "iPhone 15",
            ram: 8,
            price: 166000
        },
        {
            mobile: "iPhone 16",
            ram: 8,
            price: 197000
        }
    ]
}

console.log(product.model[2].mobile);

const doubles = [2,3,4,5,6,7];
const doubled = []
for(let i of doubles){
    const u = i * 2;
    doubled.push(u)
}
console.log(doubled);