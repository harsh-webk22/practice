// alert("Js Linked");
// SOLID
const render = {
    init(gameObj) {
        // drawSky
        gameObj.tool.fillStyle = "#3498db";
        gameObj.tool.fillRect(0, 0,window.innerWidth, window.innerHeight);
        let mario = gameObj.entities.mario
        gameObj.tool.drawImage(
            mario.sprite.img,
            mario.sprite.srcX,
            mario.sprite.srcY,
            mario.sprite.srcW,
            mario.sprite.srcH,
            mario.posX,
            mario.posY,
            mario.width,
            mario.height
        )
    },
    update(gameObj) {
        // drawSky
        gameObj.tool.clearRect(0,0, window.innerWidth, window.innerHeight);
        gameObj.tool.fillStyle = "#3498db";
        gameObj.tool.fillRect(0, 0,window.innerWidth, window.innerHeight);
        
        gameObj.tool.fillStyle = "#e67e27";
        gameObj.tool.fillRect(0, 200, window.innerWidth, window.innerHeight-200)
        let mario = gameObj.entities.mario
        gameObj.tool.drawImage(
            mario.sprite.img,
            mario.sprite.srcX,
            mario.sprite.srcY,
            mario.sprite.srcH,
            mario.sprite.srcW,
            mario.posX,
            mario.posY,
            mario.width,
            mario.height
            )
    },
}
class Game {
    // game basic setup creation
    init() {
        preload().then(()=> {
            const canvas = document.querySelector(".board");
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            const tool = canvas.getContext("2d");
            let entities = {};
            let gameObj = {
                tool, canvas, entities
                }
                tool.scale(2.74, 2.74);
                let mario = new Mario(spriteSheetImage, 175, 0, 20, 20);
                gameObj.entities.mario = mario; 
                input.init();
                render.init(gameObj);  
                this.update(gameObj);                
        });
    }
    update(gameObj) {
        // game execution
        function gameLoop(){
            input.update(gameObj);
            physics.update(gameObj)
            render.update(gameObj)
            requestAnimationFrame(gameLoop)
        }
        gameLoop();
    }
    reset() {
        location.reload();
    }
}


const game = new Game();
game.init();

// console.log(a);