ifelse > multiple condition & multiple output
ternory > one condition and one output
switch > one condition & multiple output

let uname = "Aakash"
switch(uname){
    case 'Aakash':
        console.log(`Hi ${uname}`);
        break;
    case 'Pratik':
        console.log(`Hi ${uname}`)
        break;
    default:
        console.log(`Hi Unknown`)
}
Hi Aakash

let input = 2
switch(input%2){
    case 0:
        console.log(`Hi ${input} is even`);
        break;
    case 1:
        console.log(`Hi ${input} is odd`);
        break;
    default:
        console.log(`Hi Unknown Number`)

}