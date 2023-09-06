
var commands = [];

function attentionPopUp() {
  alert('ATTENTION! ATTENTION!')
}

setTimeout(function() {
  loopLines(banner, "", 100);
}, 100);

setTimeout(function() {
  loopLines(loading, "", 800);
}, 3000);

// setTimeout(function() {
//   loopLines(cursedPost, "", 100);
// }, 1000);

// СНАЧАЛА СКРЫВАЕМ БЛОКИ, А ПОТОМ ЧАСТИЧНО ПОКАЗЫВАЕМ ИХ ЗАГРУЗКУ

setTimeout(function() {
  document.getElementById('testBlock').style.display = 'none';
}, 1);

setTimeout(function() {
  document.getElementById('testBlock').style.display = 'block';
}, 10000);

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

