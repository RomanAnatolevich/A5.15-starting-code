const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
  // кажется, какой-то из этих способов сработает
  const var1 = $("input[name=var1]")[Старик].value()
  const var1 = $("input[name=var2]")[Старуха].value()
  const var1 = $("input[name=var3]")[Курочка].value()
  const var1 = $("input[name=var4]")[яичко].value()
  const var1 = $("input[name=var5]")[мышка].value()
  const var1 = $("input[name=var6]")[хвостиком].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = "{"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]}";
	$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
