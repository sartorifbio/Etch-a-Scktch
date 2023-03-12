// variável que recebe a seleção da div html em que será criado o quadro
const sketchbook = document.querySelector('#sketchbook');

/*define o número de linhas e colunas na grade */
const grideRowsCols = 16;
const whiteSquare = 512 / grideRowsCols;

//variável que recebe o tamanho em pixes da altura e largura do quadro
const whidthHeight = 512;

//definindo altura e largura
sketchbook.style.width = `${whidthHeight}px`;
sketchbook.style.height = `${whidthHeight}px`;;

/*criando este estilo porque no style display inline-block que vou criar na iteração abaixo, ficará um espaço entre as divs*/
sketchbook.style.lineHeight = '0%';

sketchbook.style.margin = '20px';

const clearFrame = document.querySelector('#clear');

clearFrame.addEventListener('click', () => {
    callFrame();
    });

function callFrame(){
    for (let row=0; row < whiteSquare;row++){
        for (let col=0;col < whiteSquare;col++){
            let cell = document.createElement('div');

            cell.style.width = `${grideRowsCols}px`;
            cell.style.height = `${grideRowsCols}px`;
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
            
                     
        };
    };
};

callFrame();