const grade= 59;
let result;

if (grade <0 || grade > 100 ) {
    console.log('Invalid value');
    result= 'Not valid'
} else {
    if (grade<60){
        result= 'F';
    } else {
        if (grade<70){
            result= 'D';
        } else {
            if (grade<80){
                result= 'C';
            } else {
                if (grade<90){
                    result= 'B';
                }else {
                    result='A'
                }
            }
        }
    }
    
}


console.log(`Your grade is ${result}`);
