// JavaScript
const sidebar = document.querySelector('.sidebar');

// サイドバーの幅をトグルする関数
function toggleSidebarWidth() {
  sidebar.classList.toggle('expanded');
}

// クリックイベントを追加
sidebar.addEventListener('click', toggleSidebarWidth);