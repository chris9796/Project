
function showThemes() {
  // 시작하기 버튼을 숨기고 테마 컨테이너를 표시합니다.
 const themes = document.querySelector("#theme_container");
 themes.style.display = 'block';
  //document.getElementById('themes').style.display = 'block';
}

function selectTheme(theme) {
  // 선택된 테마에 대한 작업을 수행합니다.
  if(theme === 1){
  document.location.href="./Theme1_page.html";
  }
  else if(theme === 2){

  }
  else if(theme ===3){

  }
}
