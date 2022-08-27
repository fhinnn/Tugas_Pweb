function myFunction() {
  var mode = document.getElementById('mode');

  mode.onclick = function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      mode.src = 'images/sun.svg';
    } else {
      mode.src = 'images/moon.svg';
    }
  };
}
