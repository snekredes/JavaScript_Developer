var idade = 68
console.log(`Você tem ${idade} anos`)
if( idade < 16)
    console.log(`Não Vota!`)
else{
    if( idade < 18 || idade > 67) { 
    console.log(`Voto Facultativo!`) 
    } else{
        console.log(`Voto Obrigatório!`)
    }
}