

document.getElementById('carInsuranceForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const carage = document.getElementById('carage').value;
    const dop = document.getElementById('dop').value;
    const password = document.getElementById('password').value;

    if (name && email && carage && dop && password) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all required fields!');
    }
});

