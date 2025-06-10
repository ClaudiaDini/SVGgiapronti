/** @type {SVGImage[]}*/
let lista_sfondi = []
/** @type {SVGImage[]}*/
let lista_sopra = []

function preload(){
  lista_sfondi = [
    loadSVG("./assets/sfondi/A-1-18.svg")
  ]
  lista_sopra = [
    loadSVG("./assets/sopra/A-2-19.svg")
  ]
}

function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  imageMode (CENTER)
  noLoop(); // Opzionale 
}

function draw() {
  clear(); // Non cancellare!
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
      rect(x * 10, y * 10, x, y);
    }}
    let randomsfondi = random (lista_sfondi)
    let randomsopra = random (lista_sopra)
  
    fillSVG (randomsfondi, "red")

    image(randomsfondi, width/2, height/2, 400, 400)
    image(randomsopra, width/2, height/2, 400, 400)

  
}