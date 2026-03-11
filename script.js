function parseMatrix(input){
return input.trim().split("\n").map(row =>
row.trim().split(" ").map(Number)
);
}

function displayMatrix(matrix){
return matrix.map(row => row.join(" ")).join("\n");
}

function addMatrices(){

let A=parseMatrix(document.getElementById("matrixA").value);
let B=parseMatrix(document.getElementById("matrixB").value);

if(A.length!==B.length || A[0].length!==B[0].length){
document.getElementById("result").textContent="Matrix sizes must match";
return;
}

let result=A.map((row,i)=>
row.map((val,j)=>val+B[i][j])
);

document.getElementById("result").textContent=displayMatrix(result);
}

function multiplyMatrices(){

let A=parseMatrix(document.getElementById("matrixA").value);
let B=parseMatrix(document.getElementById("matrixB").value);

if(A[0].length!==B.length){
document.getElementById("result").textContent="Columns of A must equal rows of B";
return;
}

let result=[];

for(let i=0;i<A.length;i++){

result[i]=[];

for(let j=0;j<B[0].length;j++){

let sum=0;

for(let k=0;k<B.length;k++){
sum+=A[i][k]*B[k][j];
}

result[i][j]=sum;

}

}

document.getElementById("result").textContent=displayMatrix(result);

}

function transpose(matrix){
return matrix[0].map((_,i)=>matrix.map(row=>row[i]));
}

function transposeA(){
let A=parseMatrix(document.getElementById("matrixA").value);
let result=transpose(A);
document.getElementById("result").textContent=displayMatrix(result);
}

function transposeB(){
let B=parseMatrix(document.getElementById("matrixB").value);
let result=transpose(B);
document.getElementById("result").textContent=displayMatrix(result);
}