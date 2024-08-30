function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        
        /* Regular expression pattern created to match "pet_" then alphanumeric characters */
        let pattern = /^pet_\d\w/

        /* regexp test method to check if the input match the pattern  */
        if (pattern.test(input)) {
            result = 'Valid Input 🟢'
        }
        else {
            result = 'Invalid Input 🔴'
        }
        

        document.getElementById('result').innerText = result;
}


