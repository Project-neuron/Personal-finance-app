/**
  * The Budgets class with handle the rebalancing of budgets when items run over budget 
  * @constructor takes in a itemTotal object 
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */
budgets = function(){ 

  this.budgetPercentages = totals; 
    
    
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
