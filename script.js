let isOn = false;
turnOn=()=>{
  isOn = true
  document.getElementById("display").value = ""
}

turnOff=()=>{
  isOn = false
  document.getElementById("display").value = "OFF"
}
appendValue=(value)=>{
  if(!isOn) return
  document.getElementById("display").value += value;
}

clearDisplay=()=>{
  if(!isOn) return
  document.getElementById("display").value = "";
}

calculate=()=>{
  if(!isOn) return
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}