 /**
  * The card total class handles all summation activity required by the application in regards to the card totals  
  * @constructor takes in a itemTotal object 
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */

cardTotals = function(totals) { 

    this.itemTotals = totals; 
     
    
    /**
    * Method function: 
    * Method Sets the item categories totals object into debtors   
    */
    this.setCards = function(financeSheet){
      this.itemTotals.setTotals(financeSheet.getCardNames());
    }
    
      
    /**
    * Method function: 
    * Method gets the card totals  
    */
    this.getCardTotals = function(){
      return this.itemTotals.getTotals();
    }
    
    /**
    * Method function: 
    * Method takes a money item and and the category names from the spreadsheet and sets the totals for each category 
    * @param  moneyItem object that holds a transaction item 
    */
    this.addToCardTotals = function(moneyItem){
      this.itemTotals.addToTotals(moneyItem.getCardUsed(), moneyItem.getItemPrice());
    }
    
    /**
    * Method function: 
    * Method takes a category arguement and if the category is in the dictionary it returns the value  
    * @param  category title string 
    * @returns  ajoining value total for the category  
    */
    this.getCardValue = function(card){
      return this.itemTotals.getValue(card);
     }
   }
