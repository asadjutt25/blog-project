//template

 let specilstring = 'hello this is a paragharh';
 console.log(specilstring);

 let obj={
    item: "pen",
    price: 10,
 };

 let output = `the cost of ${obj.item} is ${obj.price} rupees`;
 console.log(output);
 console.log("the cost of",obj.item,"is",obj.price);
 
 let str ="apna\tcollege";
 let newstr=str.toUpperCase();
 console.log(newstr);
 console.log(str);
 console.log(str.length);
 console.log(str.slice(1,8));
 
 //concat
 let st1="asad";
 let st2="shabbir";
 let st3=st1.concat(st2);
 let st4="My name is "+st1+st2;
 console.log(st4);
 console.log(st3);

 //replace
 console.log(st4.replace("asad","kamran"));
 // practice
 let username=prompt("enter your name ");
 let name=username.toUpperCase();
 console.log("@"+name+name.length);
 
 
 
 
 