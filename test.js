let employee = [{ name: "Carry", age: 35, joined: "wed feb 03 2011" },
{ name: "Apple", age: 35, joined: "wed feb 03 2011" },
{ name: "zenith", age: 28, joined: "mon feb 03 2011" }
]
let arr = employee.sort(function (a, b) {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
})
// let abc = employee.filter(value=>
//     {
//         if(value.name
//     }
//     )
console.log(arr)


function sleep(name){
    console.log(name)
}
async function main(input){
    for(let i=0;i<input.length;i++)
    {
        setTimeout(()=>{
            sleep(input[i])
        },3000*i)
    }
}
//main(['A','B','C'])

function repeatedNumber(Input){
    let value = Input.reduce((prev) => {
        
    })
}
repeatedNumber([2,5,1,2,3,5,1,2,4])