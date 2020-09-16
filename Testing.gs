// Tests to make sure that the item totals are being tabulated 
function cardtotalsTest() {

  var moneyItem1 = new moneyitem("Amazon purchases",25, "Amazon", "misc", false, "");
  var moneyItem2 = new moneyitem("Parking",46,"Pay-pal","Fast food", false, "");
  var moneyItem3 = new moneyitem("Door dash",38 ,"Citi bank","Bills", false, "");
  var moneyItem4 = new moneyitem("Door dash",48,"Capital one","food", false, "");
  var moneyItem5 = new moneyitem("Door dash",60,"Amex cash","food", false, "");
  var moneyItem6 = new moneyitem("Door dash",53,"Amex hilton","food", false, "");
  var moneyItem7 = new moneyitem("Door dash",71,"Main account","food", false, "");
  
  var ItemsCategorySheet = new financeSheet(new sheet(5));
  
  var CardTotals = new cardTotals(new itemTotal());
  CardTotals.setCards(ItemsCategorySheet);
  
  CardTotals.addToCardTotals(moneyItem1);
  CardTotals.addToCardTotals(moneyItem2);
  CardTotals.addToCardTotals(moneyItem3);
  CardTotals.addToCardTotals(moneyItem4);
  CardTotals.addToCardTotals(moneyItem5);
  CardTotals.addToCardTotals(moneyItem6);
  CardTotals.addToCardTotals(moneyItem7);
  
  

  
  var result1 = equalsTest(CardTotals.getCardValue("Citi bank"), 38);
  var result2 = equalsTest(CardTotals.getCardValue("Capital one"), 48); 
  var result3 = equalsTest(CardTotals.getCardValue("Pay-pal"), 46); 
  var result4 = equalsTest(CardTotals.getCardValue("Amex cash"), 60);
  var result5 = equalsTest(CardTotals.getCardValue("Amex hilton"), 53);
  var result6 = equalsTest(CardTotals.getCardValue("Amazon"), 25); 
  var result7 = equalsTest(CardTotals.getCardValue("Main account"), 71); 
  
  if(result1 == "Pass" && result2 == "Pass" && result3 =="Pass" && result4 == "Pass" && result5 == "Pass"){
    return "pass";
  }
  else{
    return "fail";
  }
  
  
}

// Tests to make sure the item category totals aggregate as expected
function categoryTotalsTest(){
  var moneyItem1 = new moneyitem("Amazon purchases",25, "Amazon", "Auto & transport", false, "");
  var moneyItem2 = new moneyitem("Parking",26,"Pay-pal","Fast food", false, "");
  var moneyItem3 = new moneyitem("Door dash",27 ,"Citi bank","Shopping", false, "");
  var moneyItem4 = new moneyitem("Door dash",28,"Capital one","Bills and utilities", false, "");
  var moneyItem5 = new moneyitem("Door dash",29,"Amex","Home", false, "");
  var moneyItem6 = new moneyitem("Door dash",30,"Amex","Kids", false, "");
  var moneyItem7 = new moneyitem("Door dash",31,"Amex","Misc", false, "");
  var moneyItem8 = new moneyitem("Door dash",32,"Amex","Education cost", false, "");
  var moneyItem9 = new moneyitem("Door dash",33,"Amex","Reimbursement", false, "");
  var moneyItem10 = new moneyitem("Door dash",34,"Amex","Food", false, "");
  var moneyItem11 = new moneyitem("Door dash",35,"Amex","Rent", false, "");
  var moneyItem12 = new moneyitem("Door dash",36,"Amex","Car payment", false, "");
  var moneyItem13 = new moneyitem("Door dash",37,"Amex","Financed payment", false, "");
  
  var itemCategorysheet = new financeSheet(new sheet(5)); 
  
  var CategoryTotals = new categoryTotals(new itemTotal());
  CategoryTotals.setItemCategories(itemCategorysheet)
  
  
  
  CategoryTotals.addToCategoryTotals(moneyItem1);
  CategoryTotals.addToCategoryTotals(moneyItem2);
  CategoryTotals.addToCategoryTotals(moneyItem3);
  CategoryTotals.addToCategoryTotals(moneyItem4);
  CategoryTotals.addToCategoryTotals(moneyItem5);
  CategoryTotals.addToCategoryTotals(moneyItem6);
  CategoryTotals.addToCategoryTotals(moneyItem7);
  CategoryTotals.addToCategoryTotals(moneyItem8); 
  CategoryTotals.addToCategoryTotals(moneyItem9);
  CategoryTotals.addToCategoryTotals(moneyItem10);
  CategoryTotals.addToCategoryTotals(moneyItem11);
  CategoryTotals.addToCategoryTotals(moneyItem12);
  CategoryTotals.addToCategoryTotals(moneyItem13);
  
  
  var result1 = equalsTest(CategoryTotals.getCategoryValue("Auto & transport"), 25);
  var result2 = equalsTest(CategoryTotals.getCategoryValue("Fast food"), 26);
  var result3 = equalsTest(CategoryTotals.getCategoryValue("Shopping"), 27);
  var result4 = equalsTest(CategoryTotals.getCategoryValue("Bills and utilities"), 28);
  var result5 = equalsTest(CategoryTotals.getCategoryValue("Home"), 29);
  var result6 = equalsTest(CategoryTotals.getCategoryValue("Kids"), 30);
  var result7 = equalsTest(CategoryTotals.getCategoryValue("Misc"), 31);
  var result8 = equalsTest(CategoryTotals.getCategoryValue("Education cost"), 32); 
  var result9 = equalsTest(CategoryTotals.getCategoryValue("Reimbursement"), 33);
  var result10 = equalsTest(CategoryTotals.getCategoryValue("Food"), 34);
  var result11 = equalsTest(CategoryTotals.getCategoryValue("Rent"), 35);
  var result12 = equalsTest(CategoryTotals.getCategoryValue("Car payment"), 36);
  var result13 = equalsTest(CategoryTotals.getCategoryValue("Financed payment"), 37);
  
  if(result1 == "Pass" && result2 == "Pass" 
  && result3 =="Pass" 
  && result4 == "Pass" 
  && result5 == "Pass"
  && result6 == "Pass"
  && result7 == "Pass" 
  && result8 == "Pass"
  && result9 == "Pass"
  && result10 == "Pass"
  && result11 == "Pass"
  && result12 == "Pass"
  && result13 == "Pass"){
    return "pass";
  }
  else{
    return "fail";
  }
  
} 

function debtorTotalsTest() { 
    var itemsCategorySheet = new financeSheet(new sheet(5));  
    
    var DebtTotals = new debtTotals(new itemTotal());
    DebtTotals.setDebtorCategories(itemsCategorySheet);  
    
    var moneyItem1 = new moneyitem("Amazon purchases",25, "Amazon", "Auto & transport", true, "Brian");
    var moneyItem2 = new moneyitem("Parking",26,"Pay-pal","Fast food", true, "Fiona");
    var moneyItem3 = new moneyitem("Door dash",27 ,"Citi bank","Shopping", true, "Mieshon"); 
    
    DebtTotals.addToDebtorTotals(moneyItem1);
    DebtTotals.addToDebtorTotals(moneyItem2);
    DebtTotals.addToDebtorTotals(moneyItem3);
    
    var result1 = equalsTest(DebtTotals.getDebtorValue("Brian"), 25);
    var result2 = equalsTest(DebtTotals.getDebtorValue("Fiona"), 26);
    var result3 = equalsTest(DebtTotals.getDebtorValue("Mieshon"), 27);
    
    if(result1 == "Pass"  
    && result2 == "Pass" 
    && result3 =="Pass"){
      return "pass";
    }
    else{
      return "fail";
    }


}

function testAllFunctions(){
  var test1 = cardtotalsTest(); 
  var test2 = categoryTotalsTest(); 
  var test3 = debtorTotalsTest(); 
}



function testRunOfProd(){
  // various sheets 
  var ItemSheet = new financeSheet(new sheet(0));
  var ItemsCategorySheet = new financeSheet(new sheet(5));
  var BudgetSheet = new financeSheet(new sheet(1));
  var CardSheet = new financeSheet(new sheet(3)); 
  
  // moneyitem list 
  var MoneyItemList = new moneyItemList();
  
  // Totals initialization 
  var DebtTotals = new debtTotals(new itemTotal());
  DebtTotals.setDebtorCategories(ItemsCategorySheet); 
  
  var CategoryTotals = new categoryTotals(new itemTotal());
  CategoryTotals.setItemCategories(ItemsCategorySheet)
  
  var CardTotals = new cardTotals(new itemTotal());
  CardTotals.setCards(ItemsCategorySheet);
  
  // load items and debt items into items list 
  ItemSheet.loadMoneyItems(MoneyItemList,1,"moneyItem"); 
  MoneyItemList.makeDebtItemsList();
  ItemsCategorySheet.loadMoneyItems(MoneyItemList, 6,"debtItem");
  
  //Obtain and initialize totals 
  var itemList = MoneyItemList.getMoneyItemList()
  for(var i = 0; i < itemList.length; i++){
    CardTotals.addToCardTotals(itemList[i]); 
    CategoryTotals.addToCategoryTotals(itemList[i]);
  }
  
  var debtList = MoneyItemList.getDebtItemList();
  for(var i = 0; i < debtList.length; i++){
    DebtTotals.addToDebtorTotals(debtList[i]);
  }
  
  CardSheet.setCardTotals(CardTotals.getCardTotals());
  BudgetSheet.setBudgetTotals(CategoryTotals.getItemCategories());
  ItemsCategorySheet.setDebtorTotals(DebtTotals.getDebtTotals());
  
  var end = "end" 
  
  
  
  
  
   
  
  
  
  

}

