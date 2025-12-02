//https://youtu.be/LrIUo8PQVvk
// https://www.figma.com/design/aAKgGZ87Lm6EL7QQk7F7I6/Userflow-etapa-1-programaci%C3%B3n?node-id=0-1&t=L4svXrd33yfQHk6G-1 
let pantalla = 0;
let fondos = [];    
let song;
let sonidoActivo = false;

function preload() {
    fondos[0] = loadImage("assets/f00_inicio_principal.jpg"); 
    fondos[1] = loadImage("assets/f01_po_fanatico.jpg");      
    fondos[2] = loadImage("assets/f02_tai_lung.jpg");         
    fondos[3] = loadImage("assets/f03_po_aterriza.jpg");      
    fondos[4] = loadImage("assets/f04_oogway_escoge.jpg");    
    fondos[5] = loadImage("assets/f05_shifu_entrenando.jpg"); 
    fondos[6] = loadImage("assets/f06_po_intenta_no_logra.png");
    fondos[7] = loadImage("assets/f07_po_tienda_fideos.png");  
    fondos[8] = loadImage("assets/f06_tai_lung_burla.jpg");    
    fondos[9] = loadImage("assets/f07_po_vs_tai_lung.jpg");  
    fondos[10] = loadImage("assets/f08_po_inmoviliza.jpg");  
    fondos[11] = loadImage("assets/f09_po_reconocido.jpg");    
    fondos[12] = loadImage("assets/f12_tai_lung_pergamino.png");
    fondos[13] = loadImage("assets/f13_shifu_paralizado.png"); 
    fondos[14] = loadImage("assets/f14_tai_lung_trono.png");  
    fondos[15] = loadImage("assets/f15_valle_sometido.png");  
    fondos[16] = loadImage("assets/f16_creditos.jpg");    
    
    miFuente = loadFont('data/Bitter-VariableFont_wght.ttf');
    song = loadSound('data/kungfu_theme.mp3');
}

let texto = ['Comenzar'];
let texto1 = ['Créditos'];
let texto2 = ['Po es un fanático obsesionado con el Kung Fu y sueña con luchar junto a sus ídolos, los Cinco Furiosos entrenados por el Maestro Shifu en el Palacio de Jade'];
let texto3 = ['El Maestro Oogway convoca un torneo para elegir al legendario Guerrero Dragón, el único capaz de proteger el Valle de la Paz de una amenaza inminente, el villano Tai Lung'];
let texto4 = ['Por accidente Po aterriza en medio del torneo tras un intento fallido de entrar'];
let texto5 = ['Oogway lo escoge'];
let texto6 = ['No lo logró'];
let texto7 = ['Oogway lo escoge como el Guerrero Dragón, para sorpresa y horror de todos, especialmente de Shifu y los Cinco Furiosos, que lo consideran indigno'];
let texto8 = ['Shifu intenta deshacerse de Po con un entrenamiento brutal. Sin embargo, Po adquiere habilidades de Kung Fu que se adaptan a su cuerpo grande y fuerte'];
let texto9 = ['Tai Lung se burla del panda, pero Po lo desafía a una pelea. ¿Que es lo que sucede?'];
let texto10 = ['Po logra inmovilizarlo'];
let texto11 = ['Tai Lung lo derrota'];
let texto12 = ['Aunque Po intentó participar, no lo logró'];
let texto13 = ['Po pierde las esperanzas de ser un guerrero dragón y vuelve a trabajar en la tienda de fideos de su padre'];
let texto14 = ['FIN'];
let texto15 = ['Po es derrotado por Tai Lung en la pelea. Tai Lung asegura su dominio sobre el Valle'];
let texto16 = ['FIN'];
let texto17 = ['Po logra inmovilizar a Tai Lung y le aplica la legendaria Llave Dactilar Wuxi. ¡Tai Lung es desvanecido!'];
let texto18 = ['Finalmente los Cinco Furiosos lo aceptan como su igual y el Maestro Shifu reconoce a Po como el Guerrero Dragón'];
let texto19 = ['FIN'];
let texto20 = ['Tai Lung, triunfante, arrebata el Pergamino de las manos de Po. Lo abre, esperando el poder que le fue negado hace veinte años'];
let texto21 = ['Tai Lung regresa al Palacio de Jade y se encuentra con el Maestro Shifu, al cual paraliza permanentemente'];
let texto22 = ['Tai Lung se instala en el Palacio de Jade, usando el Salón de los Héroes como su trono. Envía a sus secuaces lobos para que capturen a los Cinco Furiosos restantes'];
let texto23 = ['El Valle de la Paz cae bajo el yugo de Tai Lung'];
let texto24 = ['FIN'];
let texto25 = ['Integrantes: [Martina hernandez]\Obra Original: Kung Fu Panda (Dreamworks)'];
let texto26 = ['Volver'];

function setup() {
    createCanvas(640, 480);
    textFont(miFuente);
    imageMode( CENTER );
}

function dibujarBoton(x, y, ancho, alto, texto) {
  fill('#576438');
  stroke('#384027');
  rect(x, y, ancho, alto);
  textSize( 20 );
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function dialogoDeTexto(textoArray, indice, x, y, ancho, alto) {
  fill('#ffffff');
  rect(x, y, ancho, alto, 10, 15, 10, 0);
  textSize(22);
  fill('#000000');
  textAlign(LEFT, TOP);
  text(textoArray[indice], x + 10, y + 10, ancho - 20, alto - 20);
}

function draw() { 
  background( 112, 128, 73 );   
    
  if (pantalla === 0) {
    image(fondos[0],  width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);

    dibujarBoton(120, 390, 200, 50, 'Comenzar');
    dibujarBoton(380, 390, 200, 50, 'Créditos');
  }

  else if (pantalla === 1) {
    image(fondos[1], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);

    dialogoDeTexto(texto2, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 2) {
    image(fondos[2], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto3, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 3) {
    image(fondos[3], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto4, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(120, 390, 200, 50, 'Oogway lo escoge');
    dibujarBoton(380, 390, 200, 50, 'No lo logró');
  }

  else if (pantalla === 4) {
    image(fondos[4], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto7, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 5) {
    image(fondos[5], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto8, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 6) {
    image(fondos[6], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto6, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 7) {
    image(fondos[7], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto13, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'FIN');
  }

  else if (pantalla === 8) {
    image(fondos[8], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto9, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(120, 390, 200, 50, 'Po logra inmovilizarlo');
    dibujarBoton(380, 390, 200, 50, 'Tai Lung lo derrota');
  }

  else if (pantalla === 9) {
    image(fondos[9], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);

    dialogoDeTexto(texto15, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 10) {
    image(fondos[10], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto17, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 11) {
    image(fondos[11], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto18, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'FIN');
  }

  else if (pantalla === 12) {
    image(fondos[12], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto20, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 13) {
    image(fondos[13], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto21, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 14) {
    image(fondos[14], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto22, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Continuar');
  }

  else if (pantalla === 15) {
    image(fondos[15], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto23, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'FIN');
  }

  else if (pantalla === 16) {
    image(fondos[16], width/2, height/2, 640, 480);
    fill('#ffffff');
    textSize(30);
    textAlign(LEFT, TOP);
    
    dialogoDeTexto(texto25, 0, 640/2 - 300, 15, 600, 110);
    dibujarBoton(475, 420, 155, 50, 'Volver');
  }
}

function mousePressed() {

  if (pantalla === 0) {
    if (mouseX > 120 && mouseX < 320 && mouseY > 410 && mouseY < 460) {
      pantalla = 1; 
    } 
    else if (mouseX > 390 && mouseX < 590 && mouseY > 400 && mouseY < 450) {
      pantalla = 16; 
    }

    if (!song.isPlaying()) {
      song.loop();
      song.setVolume(0.5);
    }
  }

  if (pantalla === 3) {
    if (mouseX > 120 && mouseX < 320 && mouseY > 410 && mouseY < 460) {
      pantalla = 4; 
    } 
    else if (mouseX > 390 && mouseX < 590 && mouseY > 400 && mouseY < 450) {
      pantalla = 6; 
    }
  }

  if (pantalla === 8) {
    if (mouseX > 120 && mouseX < 320 && mouseY > 410 && mouseY < 460) {
      pantalla = 10; 
    } 
    else if (mouseX > 390 && mouseX < 590 && mouseY > 400 && mouseY < 450) {
      pantalla = 9; 
    }
  }

  if (mouseX > 475 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
    if (pantalla === 1) pantalla = 2;
    else if (pantalla === 2) pantalla = 3;
    else if (pantalla === 4) pantalla = 5;
    else if (pantalla === 5) pantalla = 8; 
    else if (pantalla === 6) pantalla = 7;
    else if (pantalla === 9) pantalla = 12; 
    else if (pantalla === 10) pantalla = 11; 
    else if (pantalla === 11) pantalla = 0; 
    else if (pantalla === 12) pantalla = 13;
    else if (pantalla === 13) pantalla = 14;
    else if (pantalla === 14) pantalla = 15;
    else if (pantalla === 15) pantalla = 0;
    else if (pantalla === 7) pantalla = 0;
  }

  if (pantalla === 16 && mouseX > 475 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
    pantalla = 0;
    if (song.isPlaying()) song.stop();
    sonidoActivo = false;
  }
}
