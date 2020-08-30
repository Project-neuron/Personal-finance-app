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
  var itemCategorysheet = new sheet(5); 
  var helperSheet = new financeSheet(itemCategorysheet); 
  var totals = new itemTotal(helperSheet);
  
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
