document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('NoTlpn').value;
    const date = document.getElementById('tgl').value;
    const reservationType = document.querySelector('input[name="reservationType"]:checked').value;
    const message = document.getElementById('message').value;

    const alertMessage = `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phone}
        Date: ${date}
        Reservation Type: ${reservationType}
        Message: ${message}
    `;

    alert(alertMessage);

    document.getElementById('alert').classList.remove('d-none');
    document.getElementById('contactForm').reset();
});