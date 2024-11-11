document.getElementById("orderButton").onclick = function (){
    let foodPrice = parseInt(document.getElementById("Food").value);
    let drinkprice = parseInt(document.getElementById("Drink").value);
   
    let totalprice= foodPrice + drinkprice;
   let discount = 0;

   if (totalprice > 90) {   
    alert('OK');
   }
}