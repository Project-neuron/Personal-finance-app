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
      this.itemTotals.setTotals(financeSheet.getNames(2,1,"name + value"));
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
   
  /**
  * Method function: 
  * Method takes a category arguement and if the category is in the dictionary it returns the value  
  * @param  category title string 
  * @returns  ajoining value total for the category  
  * 
  * Do the math for the current budget totals, as long as the totals arent over 100% do nothing 
  * if the amount is over 100 then subtract out the amount over which the percent has gone up  
  * then find the total number of free categories that still have room 
  * if no categories do nothing 
  * if some categories are found divide the overage amount by the number of free categories 
  * then subtract that amount from the categories 
  * after which you should add the over amount to the category that is over 
  * 
  */ 
  
   

  
}
