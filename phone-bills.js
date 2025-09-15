let calls = 520;
let Bill;
if (calls <= 100) {
  Bill = 0;
} else if (calls < 200) {
    Bill = (calls - 200) *0.8 + (calls - 200) * 0.9;
}else{
    Bill = (calls - 100)* 0.9;
}


console.log("Total Bill:",+ Bill );
