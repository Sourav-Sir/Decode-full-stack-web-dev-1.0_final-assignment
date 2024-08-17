function calculateTax() {
    // Define the tax rates based on income ranges
    return function (income) {
        let tax;

        if (income <= 10000) {
            tax = 0; // No tax for income up to $10,000
        } else if (income <= 30000) {
            tax = (income - 10000) * 0.1; // 10% tax on income between $10,001 and $30,000
        } else if (income <= 100000) {
            tax = (20000 * 0.1) + (income - 30000) * 0.2; // 20% tax on income between $30,001 and $100,000
        } else {
            tax = (20000 * 0.1) + (70000 * 0.2) + (income - 100000) * 0.3; // 30% tax on income above $100,000
        }

        return tax;
    };
}

// Create the tax calculator function
const taxCalculator = calculateTax();

// Test the function with various incomes
console.log(`Tax on $8,000 income: $${taxCalculator(8000)}`);
console.log(`Tax on $25,000 income: $${taxCalculator(25000)}`);
console.log(`Tax on $50,000 income: $${taxCalculator(50000)}`);
console.log(`Tax on $120,000 income: $${taxCalculator(120000)}`);
