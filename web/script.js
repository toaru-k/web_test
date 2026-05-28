// 1. HTMLの中から、操作したい要素を見つけて取得する（準備）
const box = document.getElementById('magic-box');
const button = document.getElementById('action-btn');

// ランダムに選ぶための色のリストを用意
const colors = [
    '#e74c3c', // 赤
    '#9b59b6', // 紫
    '#f1c40f', // 黄色
    '#e67e22', // オレンジ
    '#1abc9c', // エメラルドグリーン
    '#34495e'  // 濃いネイビー
];

// 2. ボタンが「クリックされた時（イベント）」の動きを設定する
button.addEventListener('click', () => {
    
    // 0 から 色の数の範囲でランダムな数字を作り、リストから色を一つ選ぶ
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    
    // 3. HTML要素のデザイン（CSS）やテキスト（HTML）をJavaScriptから書き換える
    box.style.backgroundColor = randomColor;
    box.textContent = '色が変わった！';
    
    // 少しだけ箱を大きくするアニメーション効果
    box.style.transform = 'scale(1.1)';
    
    // 0.2秒後（200ミリ秒後）に元の大きさに戻す
    setTimeout(() => {
        box.style.transform = 'scale(1)';
    }, 200);
});