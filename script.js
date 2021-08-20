const billamount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-give");
const checkbutton = document.querySelector("#checkk");
const errormsg = document.querySelector('#errormsg');
const notesRequiredTD = document.querySelectorAll('.notesRequiredtd');

// errormsg.innerHTML = "Something Wrong !!";

NotesDB = [2000,500,200,100,50,20,10,5,1];

// errormsg.style.display = "none";

checkbutton.addEventListener("click", function validate(){
    // if(billamount.value > 0 && cashgiven.value > 0){
        if(billamount.value <= cashgiven.value){
            errormsg.innerHTML = "";
            const amounttoreturn = cashgiven.value - billamount.value;
            calculateNotes(amounttoreturn);
            // errormsg.innerHTML = "";
        }
        else{
            // errormsg.style.display = "block";
            errormsg.innerHTML = "Something Wrong !!";
        }
        // errormsg.innerHTML = "";

    // }
    // else{
    //     // errormsg.style.display = "block";
    //     errormsg.innerHTML = "Something Wrong !!";
    // }
});

function calculateNotes(amount){
    for(x=0; x<NotesDB.length; x++){
        const notesRequired = Math.trunc(amount/NotesDB[x]);
        amount %= NotesDB[x];
        notesRequiredTD[x].innerHTML = notesRequired;
    }
};

function consoleme(){
    console.log(cashgiven.value);
    // alert("hello")
    // errormsg.innerHTML = "Something Wrong !!";
};