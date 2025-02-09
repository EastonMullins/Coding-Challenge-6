//Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold){
    let profit = [(sellingPrice - costPrice) * unitsSold];
    console.log(`Total Profit: $${profit}`);
}
calculateProfit(20, 30, 100); //Expected output "Total Profit: $1000"
calculateProfit(50, 70, 200); //Expected output: "Total Profit: $4000"

//Task 2 - Sales Tax Computation

function calculateSalesTax(amount, taxRate){
    let salesTax = [amount * taxRate];
    console.log(`Sales Tax: $${salesTax}`);
}
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1); // Expected output: "Sales Tax: $50"

//Task 3 - Employee Bonus Calculation
let calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = 0;

    if(performanceRating === "Excellent"){
        bonusPercentage = 0.20;
    }
    else if (performanceRating === "Good"){
        bonusPercentage = 0.10;
    }
    else if (performanceRating === "Average"){
        bonusPercentage = 0.05;
    }
    let bonus = salary * bonusPercentage
    console.log(`Bonus: $${bonus}`);
}
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");  // Expected output: "Bonus: $700"
