let rating = 0;

function hideChoise() {
    let toggleChoise = document.getElementsByClassName('containerForSelection')[0]
    toggleChoise.style.display = 'none';

    let toggleThanks = document.getElementsByClassName('containerForThankYou')[0];
    toggleThanks.style.display = 'block';

    document.getElementById('result').innerHTML = 'You selected ' + rating + ' out of 5';
}

function numberino(x) {
    rating = x;
    let submit = document.getElementById('submit');
    submit.removeAttribute('disabled');
}