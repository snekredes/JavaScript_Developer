let  amigo = {nome:'Renato',
     sexo:'M', 
     peso: 80.5,
     engordar(p=0){
        console.log('Engordou')
        this.peso += p

      }}
      amigo.engordar(7)
    console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)