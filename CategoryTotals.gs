/**
  * The category total class handles all summation activity required by the application in regards to the card totals  
  * @constructor takes in a itemTotal object 
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */

categoryTotals = function(totals) { 

    this.itemTotals = totals; 
    
    
    /**
    * Method function: 
    * Method Sets the item category totals object into item categories   
    */
    this.setItemCategories = function(financeSheet){
      this.itemTotals.setTotals(financeSheet.pullAllCategoryNames());
    }
    
      
  
   /**
    * Method function: 
    * Method returns item categories total   
    */
    this.getItemCategories = function(){
      return this.itemTotals.getTotals();
    }
    
    /**
    * Method function: 
    * Method takes a money item and and the category names from the spreadsheet and sets the totals for each category 
    * @param  moneyItem object that holds a transaction item 
    */
    this.addToCategoryTotals = function(moneyItem){
      this.itemTotals.addToTotals(moneyItem.getCategory(), moneyItem.getItemPrice());
    
    }
    
   /**
  * Method function: 
  * Method takes a category arguement and if the category is in the dictionary it returns the value  
  * @param  category title string 
  * @returns  ajoining value total for the category  
  */
  this.getCategoryValue = function(categoryTitle){
    return this.itemTotals.getValue(categoryTitle);
    
   } 
 }