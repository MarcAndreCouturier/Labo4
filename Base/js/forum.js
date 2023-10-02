$(document).ready(function () {
    $("#btnSoumettre").click(afficher);
	
	document.cookie = "username=votreIdentifiantPersonnelConfidentiel";
	
	// On met des textes initiaux bidons dans le forum
    ajouterTextesBidons($('#contenu'));
});

function afficher() {
    var texteSaisi = $('#ajout').val().replace(/</g, '').replace(/>/g, ''); // enlever les <>  me semble suffisant ?  s'il ne peut pas starter de script ?

    if (texteSaisi.trim() !== '') {
        
        ajouterTexte($('#contenu'), texteSaisi);
    }
}

function ajouterTextesBidons(table)
{
	// On met des textes initiaux bidons dans le forum
	ajouterTexte(table, 'Fernand03 : Salut tout le monde, est-ce que quelqu\'un a déjà entendu parler du XSS?');
    ajouterTexte(table, 'Bob: Ouin, y paraît qu\'cé dangereux!');
    ajouterTexte(table, 'Jérôme Cégep Riki: Seulement si l\'application Web est mal protégée. Si vous créez une application ASP.net avec Razor dans Visual Studio, l\'IDE vous protège du XSS. Toutefois, les applications en PHP ou en javascript sont plus vulnérables et nécessitent l\'intervention du développeur.');
}

function ajouterTexte(table, txt)
{
	var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = txt;
    tr.appendChild(td);
	table.append(tr);
}


/**
 * 1. <img src= ./images/XSS.jpg>
 * 2. <script>alert(document.cookie)</script> // fonctionne dans chrome, firefox, edge
 * 3. la création de cookie à partir de script peut être bloqué si la page n'utilise pas https
 * 4. <script>document.getElementById("contenu").innerHTML = ""</script>
 * 5. changements dans la function afficher
 */