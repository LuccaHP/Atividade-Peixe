var config = {
    type: Phaser.AUTO,
    width: 800, 
    height: 600,

    scale: {
       mode: Phaser.Scale.FIT,
       autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    
};

var game = new Phaser.Game(config);

var peixeGame;

function preload () {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/tubarao.png');
    this.load.image('alga', 'assets/alga.png');
}  

function create () {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(750, 525, 'alga');
    this.add.image(50, 525, 'alga');


    //verifica tipo de dispositivo
    if (game.device.os.desktop){
        peixeGame = this.add.image(400, 300, 'peixe').setScale(3);
    } else{
        peixeGame = this.add.image(400, 300, 'peixe').setScale(0.5);
    }
    
    peixeGame.setFlip(true,false);
}  

function update() {
    peixeGame.x = this.input.x;
    peixeGame.y = this.input.y;
}  