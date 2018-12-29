/*
 * - AUTHOR: Raphael Lima
 * - CHANNEL: Profissão T.I
 * - VIDEO: RECONHECIMENTO DE VOZ COM JAVASCRIPT - LISTA DE COMPRAS #01
 */

const btn_falar = document.querySelector('#btn-falar');
const ol = document.querySelector('ol');
var SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition;

btn_falar.addEventListener('click', function(){
	recognition.start();
});

recognition.addEventListener('result', function(e){
	var result = e.results[0][0].transcript;
	if (result.indexOf(', ')) {
		var resultArray = result.split(', ');
		resultArray.forEach(function(el){
			var produto = el.split(' ');
			var quantidade = produto.shift();
			produto = produto.join(' ');
			var li = document.createElement('li');
			li.setAttribute('onclick', 'remove(this)');
			li.innerHTML = produto + " [" + quantidade + "]";
			ol.appendChild(li);
		});
	} else {
		//FICOU FALTANDO DESENVOLVER O ELSE NO VÍDEO... FICA DE TAREFA PRA VOCÊS PRATICAREM!
	}
});

function remove(obj) {
	obj.style.display = "none";
}