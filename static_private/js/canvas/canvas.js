const Canvas = $(function(){
  let containerElm = $('#canvasWrapper');
  let canvasElm = $('#canvas');

  // 2Dのコンテキストを取り出す
  			var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            // 指定の色で範囲内を塗りつぶす
            ctx.fillStyle = 'rgb(255,0,220)';
            ctx.fillRect(0, 0, $( window ).width(), $( window ).height());

  function resizeCanvas(){
    canvasElm.outerWidth(containerElm.width());
    canvasElm.outerHeight(containerElm.height() * 1.0);  //1.0は適宜変更
  }
  resizeCanvas();
  $(window).on('resize', resizeCanvas);

  $(window).on('scroll', function() {
    //$('header').addClass('fixed');
  });
})

export default Canvas