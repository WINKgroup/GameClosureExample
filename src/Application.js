import ui.ParticleEngine as Particle;
import ui.ImageView as ImageView;
import src.Shoot as Shoot;
import animate;
import device;
import event.input.drag as drag;
import ui.View as View;

exports = Class(GC.Application, function () {

	this.initUI = function () {
        
        this._particle = new Particle({
            parent: this.view
        });
        
        GC.app.engine.on('Tick',bind(this,function (dt){
            if(Math.random()>0.1){
                this._emit();
            }
            this._particle.runTick(dt);
        }));
        
        
        var playerView = new ImageView({
            superview: this.view,
            height: device.width/5,
            zIndex: 1,
            width: device.width/5,
            x: device.width/12*5, y: device.height - device.width/4,
            image: 'resources/images/player.png'
        });
        
        playerView.on('DragStop',function (){
            animate(this).now({x: this._opts.x, y: this._opts.y });
        });
        drag.makeDraggable(playerView);
        
        setInterval(function (){
            new Shoot({
                x: playerView.style.x + playerView.style.width/2,
                y: playerView.style.y + playerView.style.height/2,
            });
        },100);
	};
    
    this._emit = function (){
        var data = this._particle.obtainParticleArray(2);
        var pObj = data[i];
        var ran = Math.random();
        for(var i in data){
            if (ran < 0.03) {
                var pObj = data[i];
                pObj.image = "resources/images/star.png";
                pObj.x = Math.random()* device.width;
                pObj.y = 0;
                pObj.dy = device.height/7;
                pObj.width = device.height/80;
                pObj.height = device.height/80;
                pObj.ttl = 9000;
                pObj.opacity = 0.5;
            }else if (ran < 0.06) {
                var pObj = data[i];
                pObj.image = "resources/images/star.png";
                pObj.x = Math.random()* device.width;
                pObj.y = 0;
                pObj.dy = device.height/4;
                pObj.width = device.height/60;
                pObj.height = device.height/60;
                pObj.ttl = 8000;   
            }
        }
        this._particle.emitParticles(data);
    
    }
});
