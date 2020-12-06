class Form{
    constructor(){

        this.Input=createInput('');
        this.button=createButton('Start');
        this.Greeting=createElement('h2');
    }
    hide(){

        this.Input.hide();
        this.button.hide();
        this.Greeting.hide();

    }

    dispaly(){

        var Title=createElement('h2')
        Title.html("Car Racing Game")
        Title.position(displayWidth/2 - 70,0);

        
        this.Input.position(displayWidth/2 - 70,displayHeight/2 - 80);        
        this.button.position(displayWidth/2 -10 ,displayHeight/2 - 50);

        this.button.mousePressed(()=>{

            this.Input.hide()
            this.button.hide()

            player.name=this.Input.value()
            playerCount+= 1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)

           
            this.Greeting.html('Welcome '+player.name);
            this.Greeting.position(displayWidth/2 - 50,displayHeight/3);

        })

    }
}