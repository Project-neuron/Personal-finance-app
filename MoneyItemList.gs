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
  
}
