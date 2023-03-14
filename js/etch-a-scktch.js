/*define o número de linhas e colunas na grade */
function defineGride(numberPixel){
    const grideRowsCols = numberPixel;
    return grideRowsCols;
}

function defineSquare(numberPixel){
    let whiteSquare = 512 / numberPixel;
    return whiteSquare;
}


function callFrame(defineGride, whiteSquare){
    for (let row=0; row < whiteSquare;row++){
        for (let col=0;col < whiteSquare;col++){
            let cell = document.createElement('div');

            cell.style.width = `${defineGride}px`;
            cell.style.height = `${defineGride}px`;
            cell.style.backgroundColor = 'white';

            cell.classList.add('cell');
            cell.style.margin = '0px';
            cell.style.display = 'inline-block';
            sketchbook.appendChild(cell);

            function numberToPaint(){
                let color = Math.floor(Math.random() * 255);
                return color;
            };

            function fillCell() {

                cell.style.backgroundColor = `rgb(${numberToPaint()}, ${numberToPaint()}, ${numberToPaint()})`; 
            };
            
            sketchbook.addEventListener('mousedown', () => {
                cell.addEventListener('mousemove', fillCell);
            });      

            sketchbook.addEventListener('mouseup', () => {
                cell.removeEventListener('mousemove', fillCell);
            });

            clearFrame.addEventListener('click', () => {
                sketchbook.removeChild(cell);
            }); 

            resolution16.addEventListener('click', () => {
                sketchbook.removeChild(cell);
            });

            resolution32.addEventListener('click', () => {
                sketchbook.removeChild(cell);
            });
            
            resolution64.addEventListener('click', () => {
                sketchbook.removeChild(cell);
            });
                     
        };
    };
};

// variável que recebe a seleção da div html em que será criado o quadro
const sketchbook = document.querySelector('#sketchbook');

let numberPixel = 16;

//variável que recebe o tamanho em pixes da altura e largura do quadro
const whidthHeight = 512;

//definindo altura e largura
sketchbook.style.width = `${whidthHeight}px`;
sketchbook.style.height = `${whidthHeight}px`;;

/*criando este estilo porque no style display inline-block que vou criar na iteração abaixo, ficará um espaço entre as divs*/
sketchbook.style.lineHeight = '0%';

sketchbook.style.margin = '20px';

const resolution16 = document.querySelector('#resolution16');

resolution16.addEventListener('click', () => {
    callFrame(defineGride(32), defineSquare(32));    
});

const resolution32 = document.querySelector('#resolution32');

resolution32.addEventListener('click', ()   => {
    callFrame(defineGride(16), defineSquare(16));
});

const resolution64 = document.querySelector('#resolution64');

resolution64.addEventListener('click', ()   => {
    callFrame(defineGride(8), defineSquare(8));
});

const clearFrame = document.querySelector('#clear');

clearFrame.addEventListener('click', () => {
callFrame(defineGride(numberPixel), defineSquare(numberPixel));    
});

callFrame(defineGride(numberPixel), defineSquare(numberPixel));