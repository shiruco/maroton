// const Canvas = $(function () {
// 	sizing();
// 	$(window).resize(function() {
// 		sizing();
// 	});
// 	var canvas = document.getElementById('canvas');
//             // 2Dのコンテキストを取り出す
//             var ctx = canvas.getContext('2d');
//             // 指定の色で範囲内を塗りつぶす
//             ctx.fillStyle = 'rgb(255,0,255)';
//             ctx.fillRect(0, 0, $( window ).width(), $( window ).height());
// });

// function sizing(){
// 	console.log(">>>>>>")
// 	$( '#canvas' ).get( 0 ).width = $( window ).width();
// 	$( '#canvas' ).get( 0 ).height = $( window ).height();
// 	var canvas = document.getElementById('canvas');
//             // 2Dのコンテキストを取り出す
//             var ctx = canvas.getContext('2d');
//             // 指定の色で範囲内を塗りつぶす
//             ctx.fillStyle = 'rgb(255,0,255)';
//             ctx.fillRect(0, 0, $( window ).width(), $( window ).height());
// }

const Canvas = $(function(){
  let containerElm = $('#canvasWrapper');
  let canvasElm = $('#canvas');

  // 2Dのコンテキストを取り出す
  			var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            // 指定の色で範囲内を塗りつぶす
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.fillRect(0, 0, $( window ).width(), $( window ).height());

  function resizeCanvas(){
    canvasElm.outerWidth(containerElm.width());
    canvasElm.outerHeight(containerElm.height() * 1.0);  //1.0は適宜変更
  }
  resizeCanvas();
  $(window).on('resize', resizeCanvas);
})

export default Canvas