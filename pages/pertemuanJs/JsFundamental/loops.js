//For
for(let i = 0 ; i<5 ; i++){
    if (i == 2){
        continue;
    }
    console.log("For " +i);
}

//while
let i = 0;
while (i < 5){
    console.log("While " +i);
    i++;
    if (i == 2){
        break;
    }
}

//do while
let j = 0;
do {
    console.log("Do While " +j);
    j++;
}while(j<5)