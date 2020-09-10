/**
  * Money Item list class is a container class for money items
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */

moneyItemList = function() { 
  this.list = []
  
  
  /**
  * Method function: 
  * Method puts a money item into a list 
  */
  this.putInList = function(moneyitem){
    this.list.push(moneyitem);
    
  }
  
  /**
  * Method function: 
  * Gets all money items from the main list that are debt items 
  * returns the list of debt items 
  */
  
  this.makeDebtItemsList = function(){
    var newList = this.list.filter(function(element, index, arr){
      return element.getReimbursable() == true;  
    }) 
    return newList;
  
  }
  
  
  
   
  
  
}
