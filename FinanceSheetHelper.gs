financeSheet = function(sheet){

  this.sheet = sheet;


   /* 
      to-do convert this function into one that can clear all items on the list at the end of each month 
  */
   this.clearAllItems = function(){
    var row = 2; 
    var column = 1; 
   
    while(this.sheet.getItem(row,column) != ""){
        
      }
  
  }
  
  // pulls all the items and assigns values to the totals variables 
  this.pullAllItems = function( itemTotals, moneyItemList){
    var row = 2; 
    var column = 1; 
    while(this.sheet.getItem(row,column)!= ""){
      var itemName = this.sheet.getItem(row,column);
      column ++;
      var itemPrice = this.sheet.getItem(row,column);
      column ++;
      var cardUsed = this.sheet.getItem(row,column);
      column ++;
      var purchaseCategory = this.sheet.getItem(row,column);
      column ++;
      var reimbersable = this.sheet.getItem(row,column);
      column ++; 
      var debtor = this.sheet.getItem(row,column);
      column ++;
      
       

      var moneyItem = new moneyitem(itemName, itemPrice, cardUsed, purchaseCategory, reimbersable, debtor);
      itemTotals.addToCardTotals(moneyItem); 
      itemTotals.addToCategoryTotals(moneyItem);

      moneyItemList.putInList(moneyItem);
      row ++;
      column=1; 
      
    } 
  
    
  }
  
  /**
  * Method function: 
  * Method goes to the underlying spread sheet and pulls the category name strings 
  * and loads them into a list to be passed to another method 
  * @param  sheet object that manipulates the underlying google sheet
  * @return the category name dictionary from the spread sheet 
  */
  this.pullAllCategoryNames = function(sheet){
    var row = 2; 
    var column = 1; 
    var itemList = {};
    while(sheet.getItem(row,column)!= ""){
      var categoryItemName = sheet.getItem(row,column);
      itemlist[categoryItemName] = 0;
      row++;
    
    }
  }
}