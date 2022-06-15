1221
12321
1234321
12345321

let palindrome = (data) => {
    let rem,temp,final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10);
        final = final*10+rem;
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(12345321)
VM136:12 Number 12345321 is not a palindrome
undefined
palindrome(1234321)
VM136:10 Number 1234321 is palindrome