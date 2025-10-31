document.addEventListener('DOMContentLoaded', () => {

    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;


    body.classList.add('light-mode');

    modeToggle.addEventListener('click', () => {
                
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Light Mode';
        } else {
            modeToggle.textContent = 'Dark Mode';
        }
    });

});