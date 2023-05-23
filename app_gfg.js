var readline=require('readline-sync');
var fs=require("fs");

var path =readline.question("Enter file name/path: ");

console.log("Entered path is: "+path);

var data=readline.question("Enter the data : ");
console.log("Entered data is: "+data);

try{
    fs.writeFileSync(path,data,{flg:'a+'})
    console.log("File written successfully");
} catch(err){
    console.log(err);
}
console.log("______________________________________");
try{
    const data=readFileSync(data,{encoding:'utf8'});
    console.log(data);
} catch(err){
    console.log(err);
}

try{
    const dataVar2=readFileSync(data,{econding:'utf8'})
} catch(err){
    console.log(err)
}

var fs=require('fs');
fs.writeFileSync(path,data,{flag:'a+'});

try{
    const dataVar3=readFileSync(data,{encoding:'utf8'});
}
catch(err){
    console.log(err);
}

