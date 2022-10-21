

// to get the particular image from the sprite
class Sprite{
    constructor(img, srcX, srcY, srcW, srcH){
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        
    }
}


// in which place to place to the object
class Entity{
    constructor(sprite, type, posX,posY, width, height ){
        this.sprite = sprite;
        this.type = type;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
}

class Mario extends Entity{
    constructor(spriteSheet, posX, posY, width, height){
        let img = new Sprite(spriteSheet, 650, 3, 17, 19);
        super(img, "mario", posX, posY, width, height);
        this.velX = 1.8;
        this.velY =0;
    }
}