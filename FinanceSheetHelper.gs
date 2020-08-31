 /**
  * This finance sheet is an extention of the basic sheet class with specific methods geared towards the finance app
  * @constructor takes in a  sheet object to serve as the underlying interface between the app and google sheets
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */
financeSheet = function(sheet){

  

   this.sheet = sheet;
   /**
  * Method function: 
  * Method goes to the underlying spread sheet and clears all the items
  */
   this.clearAllItems = function(){
    var row = 2; 
    var column = 1; 
   
    while(this.sheet.getItem(row,column) != ""){
        
      }
  
  }
  
  /**
  * Method function: 
  * Method goes to the underlying spread sheet and pulls the fincance transaction items from the sheet 
  * and loads them into a list to be passed to another method, it also agregates the totals as well  
  */
  this.pullAllItems = function(itemTotals, moneyItemList){
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
  */
  this.pullAllCategoryNames = function(){
    var row = 2; 
    var column = 1;
    var categoryNames = {}
    while(this.sheet.getItem(row,column)!= ""){
      var categoryItemName = this.sheet.getItem(row,column);
      categoryNames[categoryItemName] = 0;
      row++;
    
    }
    return categoryNames;
  }
  
   /**
  * Method function: 
  * Method Takes the credit card totals and assigns them to the finance sheet
  */
  this.setCardTotals = function(totalsList){
    var row = 2; 
    var column = 2;   
    var i = 0;
    
    while(row <=7){
      var item = totalsList[i]
      this.sheet.setItem(row, column, totalsList[i])
      i++ 
      row++;
    }
    
  }
  
   /**
  * Method function: 
  * Method Takes the budget totals  and assigns them to the finance sheet
  *@param budget item totals dictionary 
  */ 
   this.setBudgetTotals = function(categoryTotals){
    var row = 2; 
    var column = 1;
    for(var i in categoryTotals){
      
        this.sheet.setItem(row, column, i)
        column = 3; 
        this.sheet.setItem(row, column, categoryTotals[i])
        column = 1; 
        row++;
    }    
  }
  
  /**
  * Method function: 
  * Method Pulls all the debtors names from the sheet and sets up the dictionary totals to be appended to  
  * @return dictionary of debtors 
  */  
  this.getDebtorTotals = function(){
    var debtors = {}; 
    var row = 2; 
    var column = 3;   
    while(row <=4){  
      var debtorName = this.sheet.getItem(row,column); 
      column = 4; 
      var debtorTotal = this.sheet.getItem(row,column); 
      debtors[debtorName] = debtorTotal; 
      column = 3; 
      row++;
    } 
    return debotors;
    
  }
  
     
  
}