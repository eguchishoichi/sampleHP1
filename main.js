// 特定の位置までスクロール//

$('.about-bt').click(function() {
  $("html,body").animate({scrollTop:$(".about").offset().top});
});

$('.service-bt').click(function() {
  $("html,body").animate({scrollTop:$(".service").offset().top});
});

$('.member-bt').click(function() {
  $("html,body").animate({scrollTop:$(".member").offset().top});
});

$('.recruit-bt').click(function() {
  $("html,body").animate({scrollTop:$(".recruit").offset().top});
});

$('.news-bt').click(function() {
  $("html,body").animate({scrollTop:$(".news").offset().top});
});


$('.ir-bt').click(function() {
  $("html,body").animate({scrollTop:$(".ir").offset().top});
});

$('.education-bt').click(function() {
  $("html,body").animate({scrollTop:$(".education").offset().top});
});

$('.access-bt').click(function() {
  $("html,body").animate({scrollTop:$(".access").offset().top});
});

$('.faq-bt').click(function() {
  $("html,body").animate({scrollTop:$(".FAQ").offset().top});
});


$('.contact-bt').click(function() {
  $("html,body").animate({scrollTop:$(".contact").offset().top});
});


// 上矢印でトップまで戻る
$('.to-top').click(function(){
  $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
});


$('.animated').waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpクラスを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '90%',
});


$('.submit-bt').on('click', (e) => {
  // hrefのリンク先に飛ばないようにする
  e.preventDefault();

  alert('この内容で送信して良いですか？');
});



// フォーム送信前のエラーチェック
$('.submit-bt').on('click', (e) => {
  // フォームが送信された時に実行される
  const text1 = $('.text1').val();
  const text2 = $('.text2').val();

  if (text1==""&& text2=="") {
    // ページ遷移を止める
    e.preventDefault();
    $('.error1').html('必須項目に入力してください。');
  }
});


// トップに戻るボタン
// / ボタンの表示／非表示を切り替える関数
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    // ボタンを表示
    $('.back-to-top').fadeIn();
  } else {
    // ボタンを非表示
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();

  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();
