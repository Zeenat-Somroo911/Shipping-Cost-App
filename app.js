import chalk from 'chalk';
import inquirer from 'inquirer';
// Developer Name
const developerName = "ZEENAT SOMROO";
// Define shipping costs
const shippingCosts = {
    Standard: 5.00,
    Express: 10.00,
    Overnight: 20.00
};
// Function to calculate shipping cost
function calculateShippingCost(shippingMethod) {
    switch (shippingMethod.toLowerCase()) {
        case 'standard':
            return shippingCosts.Standard;
        case 'express':
            return shippingCosts.Express;
        case 'overnight':
            return shippingCosts.Overnight;
        default:
            return chalk.red(`Invalid shipping method by ${"ZEENAT SOMROO"}`);
    }
}
// Function to prompt user for shipping method
async function promptShippingMethod() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'shippingMethod',
            message: 'Select shipping method:',
            choices: ['Standard', 'Express', 'Overnight']
        }
    ]);
    const shippingCost = calculateShippingCost(answers.shippingMethod);
    console.log(chalk.green(`Shipping cost for ${answers.shippingMethod}: $${shippingCost}`));
    console.log(chalk.red.italic(`Developed by: ${"ZEENAT SOMROO"}`)); // Display developer name
    console.log(chalk.blue.bold('\n Thank you for using this app!'));
}
// Call the function to prompt user
promptShippingMethod();
