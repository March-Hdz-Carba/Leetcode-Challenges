//Have a stack help us to validate that every node of parentheses is valid. Here, we use the Last In First Out (LIFO) to validate that the last parentheses in the stack have the correct closed parentheses.
const isValid = function(s) {
    stack = [];

    for (let i = 0; s.length > i; i++) {
        if (['[', '(', '{'].includes(s[i])){
            stack.push(s[i]);
        } else if ([']', ')', '}'].includes(s[i])) {
            const lastParentheses = stack[stack.length - 1];
            console.log(lastParentheses, s[i]);

            if (lastParentheses === '(' && s[i] === ')' ||
                lastParentheses === '[' && s[i] === ']' ||
                lastParentheses === '{' && s[i] === '}') {
                    stack.pop();
                } else {
                    return false;
                }
        }
    }

    return stack.length === 0;
};

const stack = ['1', 'a', '2', 'b', '3', 'c'];
console.log(stack.length); // 6
console.log(stack[5]); // 'c'



  console.log(isValid('()[]{}')); // true
  console.log(isValid('([{}])')); // true
  console.log(isValid('([)]')); // false
  console.log(isValid('((()))')); // true
  console.log(isValid(']')); // false
