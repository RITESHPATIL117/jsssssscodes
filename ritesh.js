function calculateTotal(numbers) {
    let total = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
  
    return total;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const total = calculateTotal(numbers);
  console.log("The total is:", total);