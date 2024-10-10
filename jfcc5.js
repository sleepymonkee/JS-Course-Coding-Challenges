const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

function checkWinner(scoreDolphins, scoreKoalas){
    if(scoreDolphins>scoreKoalas){
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    }else if(scoreKoalas>scoreDolphins){
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    }else{
        console.log(`Draw`);
    }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

const scoreDolphins1 = calcAverage(84, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);
checkWinner(scoreDolphins1, scoreKoalas1);
