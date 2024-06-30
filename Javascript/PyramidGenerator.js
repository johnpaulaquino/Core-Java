// const character = "!";
// const count = 10;
// const rows = [];
// let inverted = false;

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }

// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);


// Get the Average of grades in an array
// function getAverage(scores) {

//     let sum = 0;
//          for(let i = 0; i < scores.length; i++){
  
//            sum+=scores[i];
          
//          }
//            let ave = 0;
//            return (ave = sum/scores.length);
//   }
  
//   console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
//   console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


function getGrade(score) {
    if(score === 100){
         return "A++";
    }else if(score >= 90 && score <=99){
          return "A";
    }else if(score >= 80  && score <=89){
             return "B";
    }
    else if(score >= 70   && score <=79){
            return "C";
    }
    else if(score >= 60 && score <=69){
            return "D";
    }
    else if(score >= 0 && score <=59){
            return "F";
    }
    }
    
    console.log(getGrade(96));
    console.log(getGrade(82));
    console.log(getGrade(56));

    function hasPassingGrade(score) {
        let checkGrades = getGrade(score);
          
          if(checkGrades ==="A++" || 
            checkGrades ==="A" ||
            checkGrades ==="B" ||
            checkGrades ==="C" ||
            checkGrades ==="D"){
            return true;
          }else{
            return false;
          }
      }
      
      function getAverage(scores) {
        let sum = 0;
      
        for (const score of scores) {
          sum += score;
        }
      
        return sum / scores.length;
      }
      
      function getGrade(score) {
        if (score === 100) {
          return "A++";
        } else if (score >= 90) {
          return "A";
        } else if (score >= 80) {
          return "B";
        } else if (score >= 70) {
          return "C";
        } else if (score >= 60) {
          return "D";
        } else {
          return "F";
        }
      }
      
      function hasPassingGrade(score) {
        return getGrade(score) !== "F";
      }
      console.log(hasPassingGrade(100));
      
      function studentMsg(totalScores, studentScore) {
        let message = "";
      if(hasPassingGrade(getGrade(studentScore))){
        message = " You failed the course.";
     
      }else{
        message = " You Passed the course.";
      }
      return "Class average: "+getAverage(totalScores) +" . "+"Your grade: "+getGrade(studentScore)+" ."+message;
      }
      console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
      