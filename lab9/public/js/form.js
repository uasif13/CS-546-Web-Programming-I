const form = document.getElementById("myForm");
if(form) {
    const index = document.getElementById('index');
    const myOl = document.getElementById('results');
    const errorDiv = document.getElementById('error');
    myForm.addEventListener('submit', (event) => {
        try {
            event.preventDefault();
            errorDiv.hidden = true;
            const indexValue = index.value;
            const parsedIndex = parseInt(indexValue)
            if (isNaN(parsedIndex) || (parsedIndex > 1476)){
                form.reset()
                throw 'Please provide an integer below 1476, inclusive'
            }
            //Fibonacci
            let i = 0
            let j = 1
            counter = 1
            while (counter < parsedIndex) {
                let temp = j;
                j = i+j;
                i = temp;
                counter++;
            }
            let fibNumber = j
            if (parsedIndex <= 0) {
                fibNumber = i
            }

            //Is fibNumber prime
            let isPrime = true;
            if (fibNumber == 0 || fibNumber == 1){
                isPrime = false;
            }
            else if (fibNumber > 1) {
                for (let i = 2; i < Math.sqrt(fibNumber); i++) {
                    if (fibNumber % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            let output = `The Fibonacci of ${parsedIndex} is ${fibNumber}.`
            let li = document.createElement('li')
            li.innerHTML = output;
            if (isPrime) {
                li.className = "is-prime"
            } else {
                li.className = "not-prime"
            }
            myOl.appendChild(li)
            form.reset()
        }
        catch (e) {
            errorDiv.hidden = false;
            errorDiv.innerHTML = e;
        }
        }
    )
}
