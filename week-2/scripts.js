document.addEventListener('DOMContentLoaded', goDOM);

function goDOM () {
    var btn = document.createElement("button");
    var buttonText = document.createTextNode('Insert Square');
    var counter = 0;

    btn.appendChild(buttonText);
    btn.id = "button1";
    btn.style.height = "30px";
    btn.style.margin = "2em auto";
    btn.style.display = 'block';
    document.body.appendChild(btn);

    document.getElementById("button1").addEventListener("click", insertSquare);

    function insertSquare() {
        var square = document.createElement('div');
        square.style.backgroundColor = 'black';
        square.style.height = '50px';
        square.style.width = '50px';
        square.style.margin = '10px';
        square.style.display = 'inline-block';
        square.style.textAlign = 'center';
        square.style.lineHeight = '50px';
        square.style.verticalAlign = 'middle';
        square.className = 'squares';
        counter ++;
        square.id = counter;
        square.innerHTML = counter;
        document.body.appendChild(square);

        square.addEventListener('mouseover', displayNumber);
        square.addEventListener('mouseout', hideNumber);
        square.addEventListener('click', getRandomColor);
        square.addEventListener('dblclick', removeSquare);

        function displayNumber() {
            square.style.color = "white";
        }

        function hideNumber() {
            square.style.color = "transparent";
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            };    
            square.style.backgroundColor = color;        
        };

        function removeSquare(e) {
            var thisSquare = e.target;
            var squareNumber = thisSquare.innerHTML;
            if (squareNumber % 2 == 0) {
                if (thisSquare.nextElementSibling === null) {
                    alert ("there's nothing to remove!")
                    return;
                }
                thisSquare.nextElementSibling.remove();

            } else {
                if (thisSquare.previousElementSibling === btn) {
                    alert ("can't remove the button!")
                    return;
                }
                thisSquare.previousElementSibling.remove();
            } 
        }
    }
};
