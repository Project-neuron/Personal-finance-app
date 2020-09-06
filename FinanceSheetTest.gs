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
  
  if(result1 == "Pass" && result2 == "Pass" && result3 =="Pass" && result4 == "Pass" && result5 == "Pass"){
    return "pass";
  }
  else{
    return "fail";
  }
  
  
}

// Tests to make sure the item category totals aggregate as expected
function categoryTotals(){
  var itemCategorysheet = new financeSheet(new sheet(5)); 
  var totals = new itemTotal();
  totals.setItemCategories(itemCategorysheet)
  
  var moneyItem1 = new moneyitem("Amazon purchases",25, "Amazon", "Auto & transport", false, "");
  var moneyItem2 = new moneyitem("Parking",26,"Pay-pal","Fast food", false, "");
  var moneyItem3 = new moneyitem("Door dash",27 ,"Citi bank","Shopping", false, "");
  var moneyItem4 = new moneyitem("Door dash",28,"Capital one","Bills and utilities", false, "");
  var moneyItem5 = new moneyitem("Door dash",29,"Amex","Home", false, "");
  var moneyItem6 = new moneyitem("Door dash",30,"Amex","Kids", false, "");
  var moneyItem7 = new moneyitem("Door dash",31,"Amex","Misc", false, "");
  var moneyItem8 = new moneyitem("Door dash",32,"Amex","Education cost", false, "");
  
  totals.addToCategoryTotals(moneyItem1);
  totals.addToCategoryTotals(moneyItem2);
  totals.addToCategoryTotals(moneyItem3);
  totals.addToCategoryTotals(moneyItem4);
  totals.addToCategoryTotals(moneyItem5);
  totals.addToCategoryTotals(moneyItem6);
  totals.addToCategoryTotals(moneyItem7);
  totals.addToCategoryTotals(moneyItem8); 
  
  
  var result1 = equalsTest(totals.getCategoryValue("Auto & transport"), 25);
  var result2 = equalsTest(totals.getCategoryValue("Fast food"), 26);
  var result3 = equalsTest(totals.getCategoryValue("Shopping"), 27);
  var result4 = equalsTest(totals.getCategoryValue("Bills and utilities"), 28);
  var result5 = equalsTest(totals.getCategoryValue("Home"), 29);
  var result6 = equalsTest(totals.getCategoryValue("Kids"), 30);
  var result7 = equalsTest(totals.getCategoryValue("Misc"), 31);
  var result8 = equalsTest(totals.getCategoryValue("Education cost"), 32); 
  
  if(result1 == "Pass" && result2 == "Pass" && result3 =="Pass" && result4 == "Pass" && result5 == "Pass"&& result6 == "Pass"&& result7 == "Pass" && result8 == "Pass"){
    return "pass";
  }
  else{
    return "fail";
  }
  
} 

function testDebtorTotals() { 
    var itemsCategorySheet = new financeSheet(new sheet(5));  
    var totals = new itemTotal()
    totals.setDebtorCategories(itemsCategorySheet);  
    
    var moneyItem1 = new moneyitem("Amazon purchases",25, "Amazon", "Auto & transport", true, "Brian");
    var moneyItem2 = new moneyitem("Parking",26,"Pay-pal","Fast food", true, "Fiona");
    var moneyItem3 = new moneyitem("Door dash",27 ,"Citi bank","Shopping", true, "Mieshon"); 
    
    totals.addToDebtorTotals(moneyItem1);
    totals.addToDebtorTotals(moneyItem2);
    totals.addToDebtorTotals(moneyItem3);
    
    var result1 = equalsTest(totals.getDebtorValue("Brian"), 25);
    var result2 = equalsTest(totals.getDebtorValue("Fiona"), 26);
    var result3 = equalsTest(totals.getDebtorValue("Mieshon"), 27);
    
    if(result1 == "Pass" && result2 == "Pass" && result3 =="Pass"){
      return "pass";
    }
    else{
      return "fail";
    }


}

function testAllFunctions(){
  var test1 = testDebtorTotals(); 
  var test2 = categoryTotals(); 
  var test3 = cardTotalsTest(); 
  

}

function setCardTotals(){
   var itemsCategorySheet = new financeSheet(new sheet(5));
   var itemSheet = new financeSheet(new sheet(0));
   var cardSheet = new financeSheet(new sheet(3));
   
   
  
  var totals = new itemTotal();
  totals.setCards(itemsCategorySheet);
  totals.setItemCategories(itemsCategorySheet);
  totals.setDebtorCategories(itemsCategorySheet);
  
  var itemList = new moneyItemList();
  
  itemSheet.pullAllItems(totals, itemList);
  cardSheet.setCardTotals(totals.getCardTotals());
  itemsCategorySheet.setDebtorTotals(totals.getDebtors());
  
   

}
