// function setCookie() {
//   document.cookie = 'sampleCookie=' + encodeURIComponent(document.lastModified);
// }
//
// function getCookie() {
//   console.log(findCookieValue('sampleCookie'));
// }
//
// function findCookieValue(cookieName) {
//   var allCookies = document.cookie;
//   var pos = allCookies.indexOf(cookieName + '=');
//   //если куки есть извлечь его значения
//   if (pos != -1) {
//     var start = pos + cookieName.length + 1;
//     var end = allCookies.indexOf(';', start);
//
//     if(end == -1) {
//       end = allCookies.length;
//     }
//     var value = allCookies.substring(start, end);
//     return decodeURIComponent(value);
//   }
// }

//запись куки и все такое
// window.onload = function() {
//   function $(id) {
//     return document.getElementById(id);
//   }
//   var f = document.forms[0];
//
//   $('saveBtn').onclick = function() {
//     var cookieStr = '';//пусто
//     cookieStr += f.cookieName.value + '=' + f.cookieValue.value + ';'; //имя, значение из инпутов формы
//     cookieStr += 'max-age' + f.cookieAge.value + ';';//срок
//     document.coocke = cookieStr; //создаем пустую переменную, записываем туда имя куки, значение, срок
//   }
//
//   $('readAll').onclick = function() {
//     console.log(document.cookie); //выводим все куки при нажатии на кнопочку
//   }
//   $('readSpec').onclick = function() {
//     console.log(findCookieValue(f.nameToRead.value)); //выводим конкретную куки
//   }
//   //ищем куки
//   function findCookieValue(cookieName) {
//     var allcookies = document.cookie;
//     var pos = allcookies.indexOf(cookieName + '=');
//     if (pos != -1) {
//       var start = pos + cookieName.length + 1;
//       var end = allCookies.indexOf(';', start);
//
//       if(end == -1) {
//         end = allCookies.length;
//       }
//       var value = allCookies.substring(start, end);
//       return decodeURIComponent(value);
//     }
//   }
// }

//куки цвет
window.addEventListener('load', function() {
  var savedColor = fundCookieValue('page-color');
  if(savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
  document.getElementById('saveButton').addEventListener('click', function() {
    var selectedColor = getCheckedRadioId('color');
    document.cookie = 'page-color=' + decodeURIComponent(selectedColor) + ';max-age=' + (60*60);
    document.body.style.backgroundColor = selectedColor;
  });
  function getCheckedRadioId(name) {
    var elements = document.getElementById(name);
    for(var i = 0, len = elements.length; i < len; ++i) {
      if(elements[i].checked) { return elements[i].value }
    }
  }
  function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName+ '=');
    if (pos != -1) {
      var start = pos + cookieName.length + 1;
      var end = allCookies.indexOf(';', start);

      if(end == -1) {
        end = allCookies.length;
      }
      var value = allCookies.substring(start, end);
      return decodeURIComponent(value);
    }
  }
});
