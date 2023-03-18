function divisible(count) {
  for (let x = 1; x <= count; x++) {
    console.log(
      x % 5 === 0 // checks if divisible by 5
        ? x % 7 === 0 // checks if divisible by 5 and 7
          ? 'Knose Pet Care Made Easy'
          : 'Knose'
        : x % 7 === 0 // checks if divisible by 7
        ? 'Pet Care Made Easy'
        : x,
    );
  }
}

function dashAsterisk(count) {
  for (let i = 1; i <= count; i++) {
    let row = '';

    // Add '-' characters to the row
    for (let j = 1; j <= count - i; j++) {
      row += '-';
    }

    // Add '*' characters to the row
    for (let k = 1; k <= i; k++) {
      row += '*';
    }

    console.log(row);
  }
}

function bestSortingMethod() {
  console.log(
    'The best sorting method depends on various factors such as the size of the input data, the distribution of the data, the memory constraints, and the specific requirements of the problem at hand.\n\n*Quick Sort is one of the fastest sorting algorithms and is often used as the default sorting method.\n*Bubble Sort is a simple sorting algorithm, it is easy to implement and is suitable for small datasets. But sometimes it is slow fot large datasets and not recommended for the large projects.\n*Merge Sort is a stable sorting algorithm. It is suitable for sorting large datasets and has good performance on all types of input data, including arrays with repeated elements. But it requires additional memory to perform the sorting, which can be a disadvantage for limited memory environments.\n\nFor most general use cases, Quick Sort or Merge Sort are good choices, as they have good average case performance and are suitable for a wide range of input data. However, for specific use cases, other sorting algorithms may be more suitable.',
  );
}

// Parse the command-line arguments
const args = process.argv.slice(2);
const command = args[0];
const param = parseInt(args[1]);

// Execute the appropriate function based on the command-line argument
switch (command) {
  case 'divisible':
    divisible(param);
    break;
  case 'dashAsterisk':
    dashAsterisk(param);
    break;
  case 'bestSortingMethod':
    bestSortingMethod();
    break;
  default:
    console.log(`Invalid command: ${command}`);
    break;
}
