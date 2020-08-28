// Aggregates and sets the totals for the categories as well as the cards 
function setTotals() { 
  var itemList = new moneyItemList();
  var itemSheet = new sheet(0);
  var budgetSheet = new sheet(1); 
  var cardSheet = new sheet(3); 
  itemList.pullAllItems(itemSheet); 
  itemList.setCardTotals(cardSheet);
  itemList.setBudgetTotals(budgetSheet);
}


