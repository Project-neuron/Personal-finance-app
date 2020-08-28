financeSheet = function(){


   /* 
      to-do convert this function into one that can clear all items on the list at the end of each month 
  */
   this.clearAllItems = function(sheet){
    var row = 2; 
    var column = 1; 
   
    while(sheet.getItem(row,column) != ""){
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column,"");
        column ++;
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column, "");
        column++;
        sheet.setItem(row,column, "");
        column++;
        sheet.setItem(row,column, "");
        row ++;
        column=1;
      }
  
  }
  
  // pulls all the items and assigns values to the totals variables 
  this.pullAllItems = function(sheet, itemTotals, moneyItemList){
    var row = 2; 
    var column = 1; 
    while(sheet.getItem(row,column)!= ""){
      var itemName = sheet.getItem(row,column);
      column ++;
      var itemPrice = sheet.getItem(row,column);
      column ++;
      var cardUsed = sheet.getItem(row,column);
      column ++;
      var purchaseCategory = sheet.getItem(row,column);
      column ++;
      var reimbersable = sheet.getItem(row,column);
      column ++; 
      var debtor = sheet.getItem(row,column);
      column ++;
      
       

      var moneyItem = new moneyitem(itemName, itemPrice, cardUsed, purchaseCategory, reimbersable, debtor);
      itemTotals.addToCardTotals(moneyItem); 
      itemTotals.addToCategoryTotals(moneyItem);

      moneyItemList.putInList(moneyItem);
      row ++;
      column=1; 
      
    } 
  
    
  }
}