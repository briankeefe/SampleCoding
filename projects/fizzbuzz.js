/*
	Task
Write a program that prints the integers from   1   to   100   (inclusive).


But:

  for multiples of three,   print   Fizz     (instead of the number)
  for multiples of five,   print   Buzz     (instead of the number)
  for multiples of both three and five,   print   FizzBuzz     (instead of the number)

The   FizzBuzz   problem was presented as the lowest level of comprehension required to illustrate adequacy.
*/

for (let i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		console.log('FizzBuzz');
	} else if (i % 5 == 0) {
		console.log('Buzz');
	} else if (i % 3 == 0) {
		console.log('Fizz');
	} else {
		console.log(i);
	}
}
