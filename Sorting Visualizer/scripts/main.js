//Declaring variables 
var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
var inp_aList = document.getElementById("a_list");

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row"

//Array generation and updation.

inp_gen.addEventListener("click", update_array_size);

function generate_array() {
    cont.innerHTML = ""; 
    let a_temp = inp_aList.value;
    if (inp_aList && a_temp) {
        arrayList = a_temp.split(",");
        for (var i = 0; i < array_size; i++) { 
            div_sizes[i] = parseInt(arrayList[i]);
            divs[i] = document.createElement("div");
            divs[i].innerHTML = div_sizes[i];
            cont.appendChild(divs[i]);
            margin_size = 0.1;
            divs[i].style = " margin:0% " + margin_size + "%; background-color:blue;color:white; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        }
    }
}

function update_array_size() {
    let isvalid = validate();
    let isvalidregx = validateregx();
    if (isvalid && (isvalidregx)) {
        array_size = inp_as.value;
        generate_array();
    }
    else {
        alert("Please enter valid numbers")
    }
}

function validateregx() {
    let a_temp = inp_aList.value;
    var numbers = /^(?:\s*\d{1,3}\s*(?:,|$))+$/;
    if (a_temp.match(numbers)) {
        return true;
    }
    return false;
}

function validate() {
    let a_temp = inp_aList.value;
    if (a_temp)
        arrayList = a_temp.split(",");
    array_size = inp_as.value;
    if (arrayList && arrayList.length == array_size) {
        return true;
    }
    return false;
}

//window.onload=update_array_size();

//Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}


function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
        inp_aList.disabled = true;
    }
}

function runalgo() {
    disable_buttons();

    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection_sort();
            break;
        case "Insertion": Insertion();
            break;
        case "Quick": Quick();
            break;
        case "Merge": Merge();
            break;
    }
}
