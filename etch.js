document.getElementById('header').innerHTML = "Etch-a-sketch";
const book_let = document.querySelector('#bookLet');

var num = 16;
for (var i = 0; i <num**2; i++){
	const gridBox = document.createElement('div');
	gridBox.classList.add('pixel');
	gridBox.setAttribute('id','pixelBox');
	bookLet.appendChild(gridBox);
	gridBox.style.width = "auto";
	gridBox.style.height = "auto";
	gridBox.style.border = "0.5px solid #000";
}




const reset = document.querySelector('#reset');
reset.addEventListener('click',() =>{
	gridchange();
});

function gridchange() {
	var num = prompt("Enter square side per side, remember value must be lower or equal to 100.");
	if (num > 100) {
		gridchange();
	} else {
		var booklet = document.getElementById('bookLet');
		while(booklet.hasChildNodes()){
			booklet.removeChild(booklet.firstchild);
		}
		

/*
		document.querySelector('#bookLet').style.gridTemplateColumns = "repeat(${pixelDiv},1fr)";
		document.querySelector('#bookLet').style.gridTemplateRows = "repeat(${pixelDiv},1fr)";
		for (var k = 0; k < num**2; k++) {
			const gridBox = document.createElement('div');
			gridBox.classList.add('pixel');
			gridBox.setAttribute('id','pixelBox');
			booklet.appendChild(gridBox);
			gridBox.style.width = "auto";
			gridBox.style.height = "auto";
			gridBox.style.border = "0.5px solid #000";
		}
		*/
	}

}