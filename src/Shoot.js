import ui.ImageView as ImageView;
import device;
import animate;

exports = Class(ImageView,function(supr){
    this.init = function (startPoint){
        supr(this,'init',[{
            superview: GC.app.view,
            height: 20,
            width: 10,
            x: startPoint.x-5,
            y: startPoint.y-10,
            image: 'resources/images/shoot.png'
        }]);
        
        animate(this).now({y: startPoint.y - device.height},1000,animate.linear).then(bind(this,'removeFromSuperview'));
    }
});