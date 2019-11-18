let stdGrades = [];
let student = document.getElementById("stdInput");
let count = 0;
let average = 0;
let aboveAverage = 0;

function counter(e) {
    if (e.keyCode === 13) {
        let grade = student.value;
        document.getElementById("count").innerHTML = `Digite a nota do aluno ${stdGrades.length + 2}`;
        stdGrades.push(grade);
        average = average + Number(stdGrades[count]);
        count++;
        if (stdGrades.length == 5) {
            average = average / 5;
            document.getElementById("avg").innerHTML = `A media dos alunos é ${average}`
            document.getElementById("count").innerHTML = `Todas as ${count} notas foram contabilizadas`;
            for(i = 0; i < stdGrades.length; i++){
                if(stdGrades[i] >= average){
                    aboveAverage++;
                    document.getElementById("aboveAverage").innerHTML = `${aboveAverage} estudantes tiveram a nota acima da média`;
                }
            }
        }
    }
}

student.addEventListener("keypress", counter);