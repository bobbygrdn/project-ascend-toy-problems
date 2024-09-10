const fractionConverter = (number) => {
    // Check if the number is a whole number
    if (Number.isInteger(number)) {
        return `${number}/1`;
    };

    // Find decimal places after whole number
    let decimalPlaces = number.toString().split('.')[1].length;

    // Create a variable for the numerator
    let numerator = number * (10 ** decimalPlaces);
    
    // Create a variable for the denominator
    let denominator = 1 * (10 ** decimalPlaces);

    // Simplify the fraction
    for (let i = 2; i <= numerator; i++) {
        while (numerator % i === 0 && denominator % i === 0) {
            numerator = numerator / i;
            denominator = denominator / i;
        }
    };

    // Return the simplified fraction
    return `${numerator}/${denominator}`;
};

export default fractionConverter;