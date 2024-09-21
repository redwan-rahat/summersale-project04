 function product(element1){

    const proName = document.getElementById('name-'+element1).innerText;
    const price = parseFloat(document.getElementById('price-'+element1).innerText).toFixed(2);
    const adding = document.getElementById('adding');
     p = document.createElement('p');  
    count = adding.childElementCount;
    p.innerHTML = `${count+1}. ${proName}`;
    adding.appendChild(p);

    totalCalculate(price)
 
}

function totalCalculate(element1){
    const PrePrice =  parseFloat(document.getElementById('total-price').innerText);
    const result = PrePrice + parseFloat(element1);
    document.getElementById('total-price').innerText=result.toFixed(2);
    
    if(result > 0){
        document.getElementById('purchase-btn').removeAttribute('disabled',true)
    }

    if(result >= 200){
        document.getElementById('coupon').removeAttribute('disabled',true)
    }

    finalPrice(element1);
}

document.getElementById('coupon').addEventListener('keyup',function(event){
    const verify = event.target.value;
    const btn =  document.getElementById('couponBtn')
    
    if(verify == 'SELL200'){
        btn.removeAttribute('disabled',true)
        
    }
    
})


function discount(){
    const PrePrice =  parseFloat(document.getElementById('total-price').innerText);

    disct = parseFloat(PrePrice * .2).toFixed(2);
    
    const result = parseFloat(PrePrice - disct).toFixed(2);

    document.getElementById('discount').innerText = disct;
    document.getElementById('total').innerText=result;
    
}

function finalPrice(element1){
   const total = parseFloat(document.getElementById('total').innerText)
   const result = parseFloat(total + parseFloat(element1)).toFixed(2);
   
   document.getElementById('total').innerText=result;
}

function reload(){
    location.reload();
}