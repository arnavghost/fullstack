function bmiCalculator (weight, height) {
    let bmi=weight/Math.pow(height,2);
    if(bmi<18.5){
        interpretation="underweight";
    }
    else if(18.5<bmi<24.9){
        interpretation="normal weight";
    }
    else{
        interpretation="overweight";
    }
    return interpretation;
}
let vari= bmiCalculator(10,1.2);
console.log(vari);