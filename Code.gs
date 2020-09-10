// Aggregates and sets the totals for the categories as well as the cards 
function setTotals(){
  var itemSheet = new financeSheet(new sheet(0));
  var itemsCategorySheet = new financeSheet(new sheet(5));
  var budgetSheet = new financeSheet(new sheet(1));
  var cardSheet = new financeSheet(new sheet(3)); 
  

  var totals = new itemTotal();
  totals.setItemCategories(itemsCategorySheet);
  totals.setDebtorCategories(itemsCategorySheet);
  totals.setCards(itemsCategorySheet);
  
  var itemList = new moneyItemList();
  
  itemSheet.pullAllItems(totals, itemList,"item",1);
  itemsCategorySheet.pullAllItems(totals, itemList,"debtItem",6);
  cardSheet.setCardTotals(totals.getCardTotals());
  budgetSheet.setBudgetTotals(totals.getItemCategories());
  itemsCategorySheet.setDebtorTotals(totals.getDebtors());
  
  //To do
  // debtorList = itemsSheet.pullAllDebtorItems(); 
  // itemcategorySheet.saveDebtorTotals(debtorList);
  

}


