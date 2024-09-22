// ボタンとテキストの要素を取得
const toggleButton = document.getElementById("toggle-button");
const toggleText = document.getElementById("toggle-text");

// ボタンがクリックされたときに動作する関数
toggleButton.addEventListener("click", function() {
    // テキストの表示/非表示を切り替える
    if (toggleText.classList.contains("hidden")) {
        toggleText.classList.remove("hidden");
    } else {
        toggleText.classList.add("hidden");
    }
});