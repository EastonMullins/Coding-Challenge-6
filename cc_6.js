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

//Task 4 - Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0){
    if (plan === "Basic"){
        cost = (10 * months) - discount;
}
else if (plan === "Premium"){
    cost = (20 * months) - discount;
}
else if (plan === "Enterprise"){
    cost = (50 * months) - discount;
}
let subscriptionCost = (plan * months) - discount
console.log(`Subscription Cost: $${cost}`);
}
calculateSubscriptionCost("Basic", 6, 10); //Expected output "Subscription Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Subscription cost: $240"

//Task 5 - Currnecy Conversion

function convertCurrency(amount, exchangeRate){
    let convertedAmount = [amount * exchangeRate];
    console.log(`Converted Amount: $${convertedAmount}`);
}
convertCurrency(100, 1.1); //Expected output "Converted Amount $110.00"
convertCurrency(250, 0.85); //Expected output "Converted Amount $212.50"
