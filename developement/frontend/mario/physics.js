let physics = {
    update(gameObj){
        this.checkCollision(gameObj.entities.mario);
        this.gravity(gameObj.entities.mario);
    },
    gravity(entities){
        entities.velY+= 1.1;
        entities.posY += entities.velY;
    },
    checkCollision(entity){
        if(entity.posY+entity.height>= 200 && entity.velY>0){
            entity.velY = 0;
            entity.posY = 181;
        }
    },
}