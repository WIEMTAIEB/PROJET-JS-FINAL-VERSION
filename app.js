// show cart

(function(){
    
    const cartInfo=document.getElementById('cart-info');
    const cart=document.getElementById('cart');
    
    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    });
    
    
})();


// add items to cart
(function(){
    const cartBtn=document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){

        btn.addEventListener('click',function(event){
                             //console.log(event.target);
            if(event.target.parentElement.classList.contains('store-item-icon'))
                {
                    let fullPath=(event.target.parentElement.previousElementSibling.src);
                    let pos=fullPath.indexOf("img")+3;
                    let partialPath=fullPath.slice(pos);
                    
                    //console.log(partialPath);
                    
                    const item={};
                    item.img=`img-cart${partialPath}`;
                    let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                    item.name=name;
                    
                    let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                    let finalPrice=price.slice(1).trim();
                    item.price=finalPrice
                    //console.log(finalPrice);
                    
                    //console.log(item);
                    
                    
                    const cartItem=document.createElement('div');
                    cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-4');
                    
                    cartItem.innerHTML=`
                    
                    <img src ="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="" style = "width: 50px; height : 50px;" >
                        <div class="item-text">

                          <p id="cart-item-title" class="font-weight-bold mb-0"> ${item.name}</p>
                          <span> dt</span>
                          <p id="cart-item-title" class="font-weight-bold mb-0"> ${item.quantity}</p>
                          <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                        </div>
                        <a href="#" id='cart-item-remove' class="cart-item-remove">
                          <i class="fas fa-trash"></i>
                        </a>
                      </div>
                    `;
                    
                    //select cart
                    const cart=document.getElementById('cart');
                    const total=document.querySelector('.cart-total-container');
                    
                    cart.insertBefore(cartItem,total);
                    alert( `${item.name} ${item.price}  added to cart`);
                    //alert('Item added to cart')
                    showTotals();
                    
                }


            });

    });
    
    
    //show totals 
    function showTotals()
    {
        
        const total=[];
        const items=document.querySelectorAll('.cart-item-price');
        
        items.forEach(function(item){
                      total.push(parseFloat(item.textContent));
                    
                      });
        const totalMoney=total.reduce(function(total,item){
            
            total+=item 
           return total; 
        },0);
        const money=totalMoney.toFixed(2);
        //console.log(money);
        
        document.getElementById('cart-total').textContent=money;
        document.querySelector('.item-total').textContent=money;
        document.getElementById('item-count').textContent=total.length;
        
    }
})();

//deleteBtFROM CARD ITM
var RemoveCartItemButtons = document.getElementsByClassName('btn btn-danger')

for (var i=0; i< RemoveCartItemButtons.length; i++){
  button.addEventListener('click', function(event){
    var buttonClicked = EventTarget
    buttonClicked.parentElement.parentElement.parentElement.remove()
  })
}





