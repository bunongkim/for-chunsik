var Links = {
    SetColor:function (color){
    var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length){
alist[i].style.color = color;
i = i + 1;
}
  }
  }
  var Body = {
    SetColor:function (color){
      document.querySelector('body').style.color = color;
    },
    SetBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }

  function nightDayHandler(self){
  var target = document.querySelector('body');
      if(self.value === '야간모드'){
        Body.SetBackgroundColor('black');
      Body.SetColor('white');
    self.value = '주간모드';
    Links.SetColor('white');

      } else {
        Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = '야간모드';
    Links.SetColor('black');
}
  }