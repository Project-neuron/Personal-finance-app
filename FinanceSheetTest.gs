// Tests to make sure that the item totals are being tabulated 
function cardTotalsTest() {

  var moneyItem1 = new moneyitem("Amazon purchases",25, "Amazon", "misc", false, "");
  var moneyItem2 = new moneyitem("Parking",46,"Pay-pal","Fast food", false, "");
  var moneyItem3 = new moneyitem("Door dash",38 ,"Citi bank","Bills", false, "");
  var moneyItem4 = new moneyitem("Door dash",48,"Capital one","food", false, "");
  var moneyItem5 = new moneyitem("Door dash",53,"Amex","food", false, "");
  
  var itemTotals = new itemTotal();
  itemTotals.addToCardTotals(moneyItem1);
  itemTotals.addToCardTotals(moneyItem2);
  itemTotals.addToCardTotals(moneyItem3);
  itemTotals.addToCardTotals(moneyItem4);
  itemTotals.addToCardTotals(moneyItem5);
  
  var result1 = equalsTest(itemTotals.getCitiTotal(), 38);
  var result2 = equalsTest(itemTotals.getCapitalOneTotal(), 48); 
  var result3 = equalsTest(itemTotals.getPayPalTotal(), 46); 
  var result4 = equalsTest(itemTotals.getAmexTotal(), 53);
  var result5 = equalsTest(itemTotals.getAmazonTotal(), 25); 
  
  if(result1 == "pass" && result2 == "pass" && result3 =="pass" && result4 == "pass" && result5 == "pass"){
    return "pass";
  }
  else{
    return "fail";
  }
  
  
}

function categoryTotals(){
  
}
