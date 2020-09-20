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
   this.clearAllItems = function(column){
    var row = 2; 
    var sheetColumn = column; 
   
    while(this.sheet.getItem(row,sheetColumn) != ""){
      this.sheet.setItem(row, sheetColumn, "");
      sheetColumn ++;
      this.sheet.setItem(row,sheetColumn, "");
      sheetColumn ++;
      this.sheet.setItem(row,sheetColumn, "");
      sheetColumn ++;
      this.sheet.setItem(row,sheetColumn,"");
      sheetColumn ++;
      this.sheet.setItem(row,sheetColumn, "");
      sheetColumn ++; 
      this.sheet.setItem(row,sheetColumn, "");
      sheetColumn ++;  
      
      row ++;
      sheetColumn=column;
        
    }
  
  }
  
 
  
   /**
  * Method function: 
  * Method goes to the underlying spread sheet and pulls the fincance transaction items from the sheet 
  * and loads them into a list to be passed to another method, it also agregates the totals as well  
  */
  this.loadMoneyItems = function(moneyItemList, column, type){
    var row = 2; 
    var sheetColumn = column; 
    while(this.sheet.getItem(row,sheetColumn)!= ""){
      var itemName = this.sheet.getItem(row,sheetColumn);
      sheetColumn ++;
      var itemPrice = this.sheet.getItem(row,sheetColumn);
      sheetColumn ++;
      var cardUsed = this.sheet.getItem(row,sheetColumn);
      sheetColumn ++;
      var purchaseCategory = this.sheet.getItem(row,sheetColumn);
      sheetColumn ++;
      var reimbersable = this.sheet.getItem(row,sheetColumn);
      sheetColumn ++; 
      var debtor = this.sheet.getItem(row,sheetColumn);
      sheetColumn ++;
      
       

      var moneyItem = new moneyitem(itemName, itemPrice, cardUsed, purchaseCategory, reimbersable, debtor);
      if(type == "moneyItem"){
        moneyItemList.putInList(moneyItem);
      }else if(type == "debtItem"){
        moneyItemList.putInDebtList(moneyItem);
      }
     
      row ++;
      sheetColumn=column; 
      
    } 
  
    
  }
  
  /**
  * Method function: 
  * Method Goes to the debt Item list and sets the outstanding debt items into a seperate sheet  
  */
  this.setDebtItems = function(debtItemList, column){ 
    var row = 2; 
    var sheetColumn = column;  
    for(var i = 0; i < debtItemList.length; i++){
        this.sheet.setItem(row, sheetColumn, debtItemList[i].getItemName());
        sheetColumn ++;
        this.sheet.setItem(row,sheetColumn, debtItemList[i].getItemPrice());
        sheetColumn ++;
        this.sheet.setItem(row,sheetColumn, debtItemList[i].getCardUsed());
        sheetColumn ++;
        this.sheet.setItem(row,sheetColumn,debtItemList[i].getCategory());
        sheetColumn ++;
        this.sheet.setItem(row,sheetColumn,debtItemList[i].getReimbursable());
        sheetColumn ++; 
        this.sheet.setItem(row,sheetColumn,debtItemList[i].getDebtor());
        sheetColumn=column;  
        row++;
      }
  
  }
  
  
  
  /**
  * Method function: 
  * Method goes to the underlying spread sheet and pulls the  card titles  strings 
  * and loads them into a list to be passed to another method 
  */
  this.getCardNames = function(){
    var row = 2; 
    var column = 13;
    var cardNames = {}
    while(this.sheet.getItem(row,column)!= ""){
      var cardItemName = this.sheet.getItem(row,column);
      cardNames[cardItemName] = 0;
      row++;
    
    }
    return cardNames;
  
  }
  
  /**
  * Method function: 
  * Method goes to the underlying spread sheet and pulls the  relevant names  strings 
  * and loads them into a list to be passed to another method 
  */
  this.getNames = function(row, column){
    var names = {}; 
    while(this.sheet.getItem(row,column)!= ""){
      var cardItemName = this.sheet.getItem(row,column);
      names[cardItemName] = 0;
      row++;
    
    }
    return names;
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
  this.setCardTotals = function(cardTotals){
    var row = 2; 
    var column = 1;
    for(var i in cardTotals){
      this.sheet.setItem(row, column, i)
      column = 2; 
      this.sheet.setItem(row, column, cardTotals[i])
      column = 1; 
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
      var debtorTotal = 0 
      debtors[debtorName] = debtorTotal; 
      column = 3; 
      row++;
    } 
    return debtors;
    
  } 
  
  /**
  * Method function: 
  * Method sets the debtor totals back into the sheet 
  * @return dictionary of debtors 
  */  
  this.setDebtorTotals = function(debtors){ 
    var row = 2; 
    var column = 3;   
    for(var i in debtors){ 
      this.sheet.setItem(row,column, i); 
      column = 4; 
      this.sheet.setItem(row,column, debtors[i]);   
      column = 3; 
      row++;
    } 
    
  } 
  
  /**
  * Method function: 
  * Method sets the money item that is a debt item to the sheet to be stored   
  * @params money item to be stored as a debt item 
  */  
  this.setDebtItem = function(moneyItem){ 
    var row = 2; 
    var column = 6;  
    while(column <= 9){ 
      this.sheet.setItem(row, column, moneyItem.getItemName()); 
      column++;
      this.sheet.setItem(row, column, moneyItem.getItemPrice()); 
      column++;  
      this.sheet.setItem(row, column, moneyItem.getDebtor()); 
      
    } 
  
  }
  
     
  
}