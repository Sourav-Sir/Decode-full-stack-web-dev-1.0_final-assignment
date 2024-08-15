const ages = [19, 22, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the Min and Max age
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// Find the median age
let medianAge;
const midIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
    medianAge = ages[midIndex];
}

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare the values of (Min - average) and (Max - average) using abs()
const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

// Output the results
console.log(`Sorted Ages: ${ages}`);
console.log(`Minimum Age: ${minAge}`);
console.log(`Maximum Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Age Range: ${ageRange}`);
console.log(`Difference (Min - Average): ${minAvgDiff}`);
console.log(`Difference (Max - Average): ${maxAvgDiff}`);
