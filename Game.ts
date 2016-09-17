class SimpleGame {
     game:Phaser.Game;
     sprite:Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(840, 630, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update, render: this.render });
    }

     preload () {
         this.game.load.image('peep', 'sprites/person3.png');
     }

     create (){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 250;
        this.game.stage.backgroundColor = '#0072bc';

        this.sprite = this.game.add.sprite(400, 300, 'peep');
     }

     update () {

     }

     render () {

     }
}

window.onload = () => {
    var game = new SimpleGame();
}