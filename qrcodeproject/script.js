let a = document.getElementById('img');
let b = document.getElementById('rr');
let c = document.getElementById('r');

function generateQr(){
    b.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + c.value;
    // hum isss api ko addd krnege then humem text bhi chtyie ki konss hai to isko html me click krne pr call krenege  
}