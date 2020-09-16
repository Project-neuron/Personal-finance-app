// Aggregates and sets the totals for the categories as well as the cards 
function setTotals(){
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
  

}


