function subtrair(vitoria, derrota) {
    return vitoria - derrota;
}
  
let resultado = subtrair(15, 25);
let RankDeterminado ;

switch (true) {
    case resultado <= 10:
        RankDeterminado = "Ferro";
        break;
        
    case resultado >= 11 && resultado <= 20:
        RankDeterminado = "Bronze";
        break;

    case resultado >= 21 && resultado <= 50:
        RankDeterminado = "Prata";
        break;

    case resultado >= 51 && resultado <= 80:
        RankDeterminado = "Ouro";
        break;

    case resultado >= 81 && resultado <= 90:
        RankDeterminado= "Diamante";
        break;

    case resultado >= 91 && resultado <= 100:
        RankDeterminado = "Lendário";
        break;    

    case resultado >= 101:
        RankDeterminado = "Imortal";
        
}

console.log ("O Herói tem de saldo de " + resultado + " e está no nível de rank: " + RankDeterminado);
