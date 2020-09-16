/**
  * Money Item list class is a container class for money items
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */

moneyItemList = function() { 
  this.list = []
  this.debtList = [];
  
  
  /**
  * Method function: 
  * Method puts a money item into a list 
  */
  this.putInList = function(moneyitem){
    this.list.push(moneyitem);
    
  }
  
  this.putInDebtList = function(moneyItem){
    this.debtList.push(moneyItem);
  }
  
  this.getMoneyItemList = function(){
    return this.list;
  }
  
  this.getDebtItemList = function(){
    return this.debtList;
  }
  
  /**
  * Method function: 
  * Gets all money items from the main list that are debt items 
  * returns the list of debt items 
  */
  
  this.makeDebtItemsList = function(){
     this.debtList = this.list.filter(function(element, index, arr){
      return element.getCategory() == "Reimbursement";  
    }) 
  
  }
  

  
  
  
   
  
  
}
