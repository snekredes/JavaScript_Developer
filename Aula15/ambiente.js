let num = [5,8,9,7,6]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`Nosso vetor seria ${num[0]}`)
let pos= num.indexOf(10)
if( pos == -1){
    console.log(`O valor não foi encontrado!`)

    }else{ 
        console.log(`O valor está na posição ${pos}`)
   
}

