// immediately Invoked Function executions
// Reason: Usage of local scope. doesnt pollute global scope
// May come handy when used with 3rd parties.
(function calc() {
  console.log('Calc');
})();
