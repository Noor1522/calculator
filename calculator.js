#! /usr/bin/env node
import inq from 'inquirer';
let data = await inq.prompt([
    {
        name: "operand1",
        type: "number",
        message: "Enter 1st Values:"
    },
    {
        name: "operand2",
        type: "number",
        message: " Enter 2nd Value :"
    },
    {
        name: "operator",
        type: "list",
        choices: ["+", "-", "*", "/", "%"],
        message: " Select Operator You Want To Perform :"
    }
]);
if (data.operator === '+') {
    console.log("sum of ", data.operand1, "+", data.operand2, " =", data.operand1 + data.operand2);
}
else if (data.operator === '-') {
    console.log("Difference of ", data.operand1, "-", data.operand2, " =", data.operand1 - data.operand2);
}
else if (data.operator === '*') {
    console.log("Product of ", data.operand1, "*", data.operand2, " =", data.operand1 * data.operand2);
}
else if (data.operator === '/') {
    console.log("Division of ", data.operand1, "/", data.operand2, " =", data.operand1 / data.operand2);
}
else if (data.operator === '%') {
    console.log("Modulus of", data.operand1, "%", data.operand2, " =", data.operand1 % data.operand2);
}
else {
    console.log("inavlid operator");
}
