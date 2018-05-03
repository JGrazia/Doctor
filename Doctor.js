console.log('Javascript is linked')

var circle = document.getElementById('circle');
var hidden = document.getElementById('hidden');
var hidden2 = document.getElementById('hidden2');
var hidden3 = document.getElementById('hidden3');
var hidden4 = document.getElementById('hidden4');
var hidden5 = document.getElementById('hidden5');
var hidden6 = document.getElementById('hidden6');

circle.onmouseover = function (event)
{
	event.target.style.backgroundColor = "red";
	var hidden = event.target.children[0];
	hidden.style.visibility = 'visible';
	var lcircle = document.getElementById('lcircle').innerHTML = 'L\'épaule (nom féminin) est la<br> région morphologique se situant <br>à la jonction du tronc <br>avec le membre supérieur.<br> Elle comporte plusieurs <br>articulations qui concourent à<br> en faire le complexe <br>articulaire le plus <br>mobile du corps humain. <br>Elle permet d\'orienter <br>le membre supérieur dans <br>l\'espace, autorisant en particulier<br> son extrémité effectrice, <br>la main, à assurer ses rôles de <br>préhension et de communication <br>avec l\'environnement situé à <br>sa portée.';
}

circle.onmouseout = function (event)
{
	event.target.style.backgroundColor = "";
	var hidden = event.target.children[0];
	hidden.style.visibility = 'hidden';
	var lcircle = document.getElementById('lcircle').innerHTML = '';
}

var circle2 = document.getElementById('circle2');

circle2.onmouseover = function (event)
{
	event.target.style.backgroundColor = "red";
	var hidden2 = event.target.children[0];
	hidden2.style.visibility = 'visible';
	var rcircle = document.getElementById('rcircle').innerHTML = 'Le coude (ou articulation olécranienne)<br> est la partie du membre supérieur<br> située entre le bras et <br>l\'avant-bras. Cette articulation <br>comprend en avant la région du « pli du coude » <br>(ou fosse cubitale). C\'est un complexe <br>articulaire synovial du membre supérieur <br>humain reliant le bras à l\'avant-bras. <br>Il unit ainsi trois os entre <br>eux : le radius, l\'ulna (cubitus) et l\'humérus. <br>Elle est la réunion de trois <br>articulations : huméro-ulnaire, huméro-radiale<br> et radio-ulnaire proximale <br>(supérieure). Lorsque l\'avant-bras <br>est tendu (extension complète), le bras<br> et l\'avant-bras ne sont <br>pas alignés dans le plan frontal. <br>Les deux parties forment un angle ouvert <br>en dehors, d\'environ 170° chez <br>l\'homme, 160° chez la femme ; c\'est <br>ce qui est appelé le valgus physiologique <br>(on retrouve la même chose pour le <br>genou).';
}

circle2.onmouseout = function (event)
{
	event.target.style.backgroundColor = "";
	var hidden2 = event.target.children[0];
	hidden2.style.visibility = 'hidden';
	var rcircle = document.getElementById('rcircle').innerHTML = '';
}

var circle3 = document.getElementById('circle3');

circle3.onmouseover = function (event)
{
	event.target.style.backgroundColor = "red";
	var hidden3 = event.target.children[0];
	hidden3.style.visibility = 'visible';
	var lcircle = document.getElementById('lcircle').innerHTML = 'Le poignet est une région <br>du membre supérieur située entre <br>la main et l\'avant-bras, et <br>contenant le carpe. Élément-clé pour le<br> fonctionnement de la main, <br>il permet les mouvements (c\'est-à-dire les <br>changements de place et d\'orientation)<br> de la main par rapport à l\'avant-bras, <br>transmet les forces appliquées de<br> la main à l\'avant-bras, permet d\'adapter la<br> capacité de flexion-extension <br>maximale des doigts et de la <br>préhension.';
}

circle3.onmouseout = function (event)
{
	event.target.style.backgroundColor = "";
	var hidden3 = event.target.children[0];
	hidden3.style.visibility = 'hidden';
	var lcircle = document.getElementById('lcircle').innerHTML = '';
}

var circle4 = document.getElementById('circle4');

circle4.onmouseover = function (event)
{
	event.target.style.backgroundColor = "red";
	var hidden4 = event.target.children[0];
	hidden4.style.visibility = 'visible';
	var rcircle = document.getElementById('rcircle').innerHTML = 'La hanche ou <br>articulation coxo-fémorale est <br>une articulation (énarthrose) qui <br>permet de joindre la cuisse au bassin.<br> Elle met en jeu deux<br> os : l\'os iliaque <br>et le fémur.';
}

circle4.onmouseout = function (event)
{
	event.target.style.backgroundColor = "";
	var hidden4 = event.target.children[0];
	hidden4.style.visibility = 'hidden';
	var rcircle = document.getElementById('rcircle').innerHTML = '';
}

var circle5 = document.getElementById('circle5');

circle5.onmouseover = function (event)
{
	event.target.style.backgroundColor = "red";
	var hidden5 = event.target.children[0];
	hidden5.style.visibility = 'visible';
	var lcircle = document.getElementById('lcircle').innerHTML = 'Le genou est une articulation qui permet <br>de joindre la jambe à la cuisse. <br>Elle met en jeu trois os, le fémur, <br>le tibia et la patella, <br>par le biais de trois articulations, <br>l\'articulation fémoro-patellaire et la <br>double articulation fémoro-tibiale. Le cartilage assure<br> la fluidité des mouvements du genou.<br> Le tissu élastique fin, le cartilage, <br>protège l\'os et fait en sorte que <br>les surfaces de l\'articulation glissent <br>facilement les unes contre les autres.';
}

circle5.onmouseout = function (event)
{
	event.target.style.backgroundColor = "";
	var hidden5 = event.target.children[0];
	hidden5.style.visibility = 'hidden';
	var lcircle = document.getElementById('lcircle').innerHTML = '';
}

var circle6 = document.getElementById('circle6');

circle6.onmouseover = function (event)
{
	event.target.style.backgroundColor = "red";
	var hidden6 = event.target.children[0];
	hidden6.style.visibility = 'visible';
	var rcircle = document.getElementById('rcircle').innerHTML = 'La cheville ou cou-de-pied est<br> l\'articulation qui relie la jambe et le pied.<br>Elle est parfois sujette à des entorses, <br>le plus souvent externes par flexion plantaire <br>et pied en équin.<br>Une cheville adulte est composée, <br>au point de vue osseux, <br>de l\'épiphyse inférieure du tibia (malléole interne et plafond), <br>de l\'épiphyse inférieure de la fibula <br>(ou péroné) (malléole externe) et du talus (ou astragale).<br> Classiquement, on parle d\'articulation supinale <br>de l\'arrière pied.';
}

circle6.onmouseout = function (event)
{
	event.target.style.backgroundColor = "";
	var hidden6 = event.target.children[0];
	hidden6.style.visibility = 'hidden';
	var rcircle = document.getElementById('rcircle').innerHTML = '';
}