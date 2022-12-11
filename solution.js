function bmi(weight, height) {
  let bmi = (weight)/(height * height);
  
  return (bmi <= 18.5) ? "Underweight" : (bmi <= 25.0 && bmi > 18.5) ? "Normal" : (bmi <= 30.0 && bmi > 25.0) ? "Overweight"
  : "Obese"
}
