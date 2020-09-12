/**
  * The card total class handles all summation activity required by the application in regards to the card totals  
  * @constructor takes in a itemTotal object 
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */

debtTotals = function(totals) { 

    this.itemTotals = totals; 
    this.debtors = {};
    
     /**
    * Method function: 
    * Method Sets the debtor totals object into debtors   
    */
    this.setDebtorCategories = function(financeSheet){
      this.debtors = financeSheet.getDebtorTotals();
    }
    
      
    /**
    * Method function: 
    * Method gets the card totals  
    */
    this.getCardTotals = function(){
      return this.cards;
    }
    
   /**
    * Method function: 
    * Method Adds to the debtor totals    
    */  
    this.addToDebtorTotals = function(moneyItem){ 
      if(moneyItem.getReimbursable() == true){
        this.itemTotals.addToTotals(moneyItem, this.debtors);
      }
        
    }
    
    /**
    * Method function: 
    * Method takes a category arguement and if the category is in the dictionary it returns the value  
    * @param  category title string 
    * @returns  ajoining value total for the category  
    */
    this.getCardValue = function(card){
      return this.itemTotals.getValue(card, this.debtors);
     }
   }
