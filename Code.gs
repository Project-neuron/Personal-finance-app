// Aggregates and sets the totals for the categories as well as the cards 
function setTotals(){
  var itemSheet = new financeSheet(new sheet(0));
  var itemsCategorySheet = new financeSheet(new sheet(5));
  var budgetSheet = new financeSheet(new sheet(1));
  var cardSheet = new financeSheet(new sheet(3)); 
  

  var totals = new itemTotal(itemsCategorySheet);
  var itemList = new moneyItemList();
  
  itemSheet.pullAllItems(totals, itemList);
  cardSheet.setCardTotals(totals.getTotalsList());
  budgetSheet.setBudgetTotals(totals.getItemCategories());
  

}


