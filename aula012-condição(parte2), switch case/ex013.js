let agora = new Date()
let diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

*/ 


switch (diaSem){
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')
        break

    default:
        console.log('[ERRO] Dia inválido!')
        break
}


/*
    Exite a condição multipla chama de switch (expressão) que serve para valores fixos. Obs: note que dentro dos parenteses é uma expressão e não uma condição.

    Ela é muito útil na programação quando se quer trabalhar com valores fixos, ela não serve muito para intervalos de valores. Ela não se limita a sim ou não, mas sim a outros valores (valores fixos). Ex: se for um determinado valor executa um bloco, se for outro executa outro bloco e assim vai...

    Não é aplicavel para todos os tipos de situações igual if else, mas é muito útil em situações pontuais, específicas.

    Ele pega  o valor da expressão desvia para o case com o valor selecionado e executa o código que está dentro do bloco e no final baterá no break que quando acontecer o fluxo será direcionado para baixo e seguirá o código normalmente. Se o break não for colocado ele executará todos os códigos até achar um brak.

    Representação:

    Switch (expresão){
        case valor 1:
         'bloco'
         
          break (detalhe que vem desde a liguagem C, existe um detalhe que precisa ser seguido. Esse detalhe é o comando 'break' que obrigatóriamente!! precisa ser colocado sempre no final dos casos)

        case valor 2:
         'bloco'

          break
        case valor 3:
         'bloco'

          break
        default: (esse comando quer dizer que se nenhum dos valores acima forem satisfeitos ele executa esse)
         'bloco'

          break (o comando break no default é opcional)


    }

*/
