document.addEventListener('DOMContentLoaded', function () 
{
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) 
    {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) 
        {
            alert('Please fill in all fields.');
            e.preventDefault();
        } 
        else
        {
            alert('Form submitted successfully!');
        }
    });
});
