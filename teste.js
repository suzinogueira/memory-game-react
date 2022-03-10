function timeConversion(s) {

  var ampm = s.substring(8,10);
  var hora = parseInt(s.substring(0,2));
  var min = s.substring(3,5);
  var seg = s.substring(6,8)
  if(ampm === "PM" && hora <=  12){
      hora += 12;
  }
  if(ampm === "AM" && hora >=  12) {
    hora -= 12;
  }
  var horaFormat = "";
  if (hora < 10){
    horaFormat = "0"+hora+":"+min+":"+seg;
  }
  else
    horaFormat = hora+":"+min+":"+seg;
  console.log(horaFormat)
}

var array = [1,2,3,4,5];
console.log(timeConversion("07:05:45PM"));