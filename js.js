let cont= 0;
let action= document.getElementById("submit");
action.onclick = function () {
    const result= calculate();
    if (cont===0){
    let remove = document.getElementById("guide");
    remove.remove();
    }
    if(document.getElementById("numbers").value===null){
        document.getElementById("numbers").value= `A Standerd Calculator, deveolped by "USMAN GHANI" @usman.dev24@gmail.com`
    }
    let input= document.getElementById("numbers").value ;
    let resultsdiv = document.getElementById("result");
    let swapresults = document.getElementById("swapme");
    let newresults = document.createElement("h3");
    let content = document.createTextNode(`${input} = ${result}`);
    newresults.appendChild(content);
    resultsdiv.replaceChild( newresults, swapresults );
    newresults.setAttribute("id", "swapme");

    let his_heading = document.createElement("h4");
    his_heading.appendChild(document.createTextNode('History: (click on these to see magic)'))
    resultsdiv.appendChild(his_heading);
    cont+=1;
    if (cont>1) {
        resultsdiv.removeChild(his_heading);
    }
    let history = document.getElementById("history");
    let history_results = document.createElement("p");
    let results_sapn = document.createElement("span");
    results_sapn.onclick = function() {
        document.getElementById("numbers").value = input;
    }
    let left_attribute= "left-contant"+cont;
    let right_attribute= "right-contant"+cont;
    
    results_sapn.setAttribute("id", left_attribute);
    results_sapn.setAttribute("class", "left-contant");
    let left_contant =document.createTextNode(` ${input} `);
    results_sapn.append(left_contant);
    history_results.append(results_sapn);
    let span = document.createElement("span") ;
    span.onclick= function() {
        document.getElementById("numbers").value = document.getElementById("numbers").value + result;
    }
    let right_contant = document.createTextNode(` = ${result} `);
    span.append(right_contant);
    span.setAttribute("id", right_attribute);
    span.setAttribute("class", "right-contant");
    history_results.appendChild(span);
    history.appendChild(history_results);
    document.getElementById('numbers').value = result;
}
let clear = document.getElementById("c");
clear.onclick = function() {
    document.getElementById("numbers").value = 0;
}
function calculate() {
    let data= getlist()
   let  result0=0;
   let data1= m_dfirst(data);
   console.log(data1)
   result0= addOrMinus(data1)
   return result0;
}
function getlist() {
    let input = document.getElementById("numbers").value;
    let data = [];
    let num="";
    let round= 0;
    for(let i= 0; i<input.length; i++) {
        if (parseFloat(input[i]) / 1 === parseFloat(input[i])  || input[i]===".") {
            num+=input[i]
            round=0;
        }
        else {
            if (round<1 && i!==0)  {
                data.push(parseFloat(num))
                num="";
                round=1;
            }
            data.push(input[i])
            }
        if (i === input.length -1 && parseFloat(input[i]) / 1 === parseFloat(input[i])) {
            data.push(parseFloat(num))
            num=""; 
        }
    }
    console.log(data)
    return data
}
function m_dfirst(orgdata){
    for(let i= 0; i<orgdata.length ; i++){
            if(orgdata[i]==="*" || orgdata[i]=== "/"){
                if(orgdata[i]==="*"){
                    let replace = orgdata[i-1] * orgdata[i+1];
                    orgdata.splice(i-1,3, replace);
                    i=i-1;
                }
                else if(orgdata[i]==="/"){
                    let replace = orgdata[i-1] / orgdata[i+1];
                    orgdata.splice(i-1,3, replace);
                    i=i-1;
                }
        }
    }
    return orgdata
}
function addOrMinus(orgdata){
    let result=0;
    for(let i=0; i<orgdata.length; i++){
        if(i=== 0 &&  orgdata[i]=== "+" ){
            result=orgdata[i+1]
        }
        else if(i=== 0 &&  orgdata[i]=== "-" ){
            result-=orgdata[i+1]
        }
        else if(i===0 && orgdata[i]!== "-" && orgdata[i]!== "+" && orgdata[i]/1 !== orgdata[i]){
            result= `Error`;
            break;
        }
        else if(i===0 && orgdata[i]/1=== orgdata[i]){
            result+=orgdata[i]
        }
        else if(orgdata[i]==="+"){
            result+=orgdata[i+1]
        }
        else if(orgdata[i]==="-"){
            result-=orgdata[i+1]
        }
    }
    if(orgdata.length == 0){
        result=`Deveolped by "USMAN GHANI" usman.dev24@gmail.com`
    }
    return result
}
       
