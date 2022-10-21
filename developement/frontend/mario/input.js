let input = {
    down:{},
    pressed:{},
    init(){
        window.addEventListener("keydown",(e)=>{
            this.down[e.code] = true;
        });

        window.addEventListener("keyup",(e)=>{
            delete this.down[e.code];
        })
    },
    update(gameObj){
        let mario = gameObj.entities.mario;
        if(this.isDown("ArrowRight")){
            mario.posX += mario.velX;
        }
        if(this.isDown("ArrowLeft")){
            mario.posX -= mario.velX;
        }
        if(this.isPressed("Space")){
            if(mario.velY == 1.1){
                mario.velY -= 10;
            }
        }

    },
    isPressed(key){
        if(this.pressed[key]){
            return false;
        } else if(this.isDown(key)){
            return true;
        }
    },
    isDown(key){
        return this.down[key];
    }

    
}