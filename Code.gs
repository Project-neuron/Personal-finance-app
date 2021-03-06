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
  
  CardSheet.setCardTotals(CardTotals.getCardTotals(), 1);
  BudgetSheet.setBudgetTotals(CategoryTotals.getItemCategories());
  ItemsCategorySheet.setDebtorTotals(DebtTotals.getDebtTotals());
  

} 

function endOfMonth(){
// initialize a sheet 
  var ItemSheet = new financeSheet(new sheet(0));
  var ItemsCategorySheet = new financeSheet(new sheet(5));  
  var CardTotalsSheet = new financeSheet(new sheet(3)); 
  var BudgetSheet = new financeSheet(new sheet(2))
  
  // initialize item holder class
  var MoneyItemList = new moneyItemList(); 
  
  // set up card totals
  var CardTotals = new cardTotals(new itemTotal());
  CardTotals.setCards(ItemsCategorySheet); 
  
  // Gather all debt items  
  ItemSheet.loadMoneyItems(MoneyItemList,1,"moneyItem"); 
  MoneyItemList.makeDebtItemsList();
  ItemsCategorySheet.loadMoneyItems(MoneyItemList, 6,"debtItem");   
  
  //Obtain and initialize totals 
  var itemList = MoneyItemList.getMoneyItemList()
  for(var i = 0; i < itemList.length; i++){
    CardTotals.addToCardTotals(itemList[i]); 
  }
  
  // clear underlying sheets 
  ItemSheet.clearAllItems(1);  
  ItemsCategorySheet.clearAllItems(6);
  CardTotalsSheet.clearRow(2); 
  BudgetSheet.clearRow(3);
  
  
  //set the debt items back 
  ItemsCategorySheet.setDebtItems(MoneyItemList.getDebtItemList(),6); 
  ItemsCategorySheet.setCardTotals(CardTotals.getCardTotals(), 15);

}


