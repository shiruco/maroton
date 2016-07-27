const CanvasLogic = $(function(){
  let containerElm = $('#canvasWrapper');
  let canvasElm = $('#canvas');
  let contentsElm = $('#contents');

  // 2Dのコンテキストを取り出す
  			// var canvas = document.getElementById('canvas');
     //        var ctx = canvas.getContext('2d');
     //        // 指定の色で範囲内を塗りつぶす
     //        ctx.fillStyle = 'rgb(100,100,100)';
     //        ctx.fillRect(0, 0, $( window ).width(), $( window ).height());

var Diffusion = new function() {
    
    var PARTICLE_NUM = 200;    
    var lineFlg = true;    
    var p = [];
    var canvas,ctx;

    this.init = function() {       
        
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle= '#ffffff';
        ctx.fillStyle = '#ffffff';
               
        document.addEventListener('contextmenu', contextMenu);
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('keydown', keyDown);
        
        createParticles(PARTICLE_NUM, canvas.width/2, canvas.height/2, 200);

        setInterval( loop, 1000 / 50 );
    }; 
    
    function contextMenu(e) {
        e.preventDefault();
    }
    
    function mouseDown(e) {
        switch (e.button) {
            case 0: // 左クリック
                createParticles(10, e.clientX, e.clientY, 20);
                break;
                
            case 2: // 右クリック
                removeParticles(e.clientX, e.clientY, 50);
                break;
        }
    }
    
    function keyDown(e) {
        if (e.keyCode == 68) lineFlg = !lineFlg;
    }
    
    // (x,y)に、randのばらつきでnum個追加
    function createParticles(num, x, y, rand) {
        for (var i=0;i<num;i++) {
            var pt = new Particle();
            pt.x = x-rand + Math.random()*(rand*2);
            pt.y = y-rand + Math.random()*(rand*2);
            p.push(pt);
        }
    }
    // (x,y)から距離range以内のParticleを削除
    function removeParticles(x, y, range) {
        var dx,dy,distance;
        for (var i=0;i<p.length;i++) {
            dx = p[i].x - x;
            dy = p[i].y - y;
            distance = Math.sqrt(dx*dx + dy*dy);
            if ( distance < range ) {
                p.splice(i, 1);
            }
        }
    }
    
    function calcParticleDXY() {
        ctx.beginPath();
        for (var i=0; i<p.length; i++) { 
            for (var j=0; j<p.length; j++) {
                if ( i != j ) { 
                    var dx = p[i].x - p[j].x;
                    var dy = p[i].y - p[j].y;
                    var distance = Math.sqrt(dx*dx + dy*dy);
                    if ( distance < p[j].force ) {
                        if (lineFlg) {
                            ctx.moveTo(p[i].x,p[i].y);
                            ctx.lineTo(p[j].x,p[j].y);
                        }
                        p[i].dx += (dx/distance) * p[j].repulsion * (p[j].force - distance)/p[j].force;
                        p[i].dy += (dy/distance) * p[j].repulsion * (p[j].force - distance)/p[j].force;
                    }
                }
            }
    
            if( p[i].x < 0 || p[i].x > canvas.width ) p[i].dx *= -0.8;
            if( p[i].y < 0 || p[i].y > canvas.height ) p[i].dy *= -0.8;
            p[i].dx -= p[i].dx/100;
            p[i].dy -= p[i].dy/100;
        }
        ctx.stroke();
    }
        
    function particleMove() {
        
        for (var i=0; i<p.length; i++) {
            p[i].x += p[i].dx;
            p[i].y += p[i].dy;
        }   
    }
    
    function loop() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        particleMove();
        calcParticleDXY();
        
        for (var i=0; i<p.length; i++) {              
            ctx.beginPath();
            ctx.arc(p[i].x, p[i].y, p[i].r, 0, Math.PI*2, true);
            ctx.fill();
        }        
    }   
};

function Particle() {
  this.r = 2;
  this.x = 0; 
  this.y = 0;
  this.dx = 0.2 - Math.random()*0.4;
  this.dy = 0.2 - Math.random()*0.4;
  this.force = this.r * 20;
  this.repulsion = 0.5;
}

Diffusion.init();



  function resizeCanvas(){
    canvasElm.outerWidth(containerElm.width());
    canvasElm.outerHeight(containerElm.height() * 1.0);  //1.0は適宜変更

    contentsElm.outerWidth(containerElm.width());
    contentsElm.outerHeight(containerElm.height() * 1.0);  //1.0は適宜変更
  }
  resizeCanvas();
  $(window).on('resize', resizeCanvas);

  //$(window).on('load', initialize);

  $(window).on('scroll', function() {
    //$('header').addClass('fixed');
  });
})

export default CanvasLogic