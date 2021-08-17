
// フォーム内でエンターキーを押した時、関数を発火
function test_ivent(e) {
  if (e.keyCode === 13) {
  memo()
}
  return false;
}

// ローカルストレージにを空の状態にする
function reset(){
  myMemo = "";
  localStorage.setItem('hoge', myMemo);
  document.getElementById("mydata_out").innerHTML = myMemo;
}

// メモ機能
function memo(){
  var mydata = document.getElementById("mydata_in").value; // テキストボックスの中身取得
  var div = document.createElement('div'); // divタグを定義
  div.textContent = document.getElementById("mydata_in").value; // divタグ内のコンテンツを定義
  document.getElementById("mydata_out").appendChild(div); // 定義したコンテンツを出力
  myMemo = document.getElementById("mydata_out").innerHTML;
  localStorage.setItem('hoge', myMemo);
  document.getElementById("mydata_in").value = ''; // テキストボックスの中身
  scroll();
}

// 一番下までスクロールする
function scroll(){
  var scrollTarget = document.getElementById("mydata_out")
  scrollTarget.scrollTop = scrollTarget.scrollHeight;
}

let text_form = document.getElementById('mydata_in');
text_form.addEventListener('keypress', test_ivent);
myMemo = localStorage.getItem('hoge');
document.getElementById("mydata_out").innerHTML = myMemo;
scroll();
