itemTotal = function(){
  /**
  * The item total class handles all summation activity required by the application 
  * @constructor takes in a finance sheet object to do a load of the category names to the item categories
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */
  
  this.cards = {}; 
  this.itemCategories = {}; 
  this.debtors = {};
  
   /**
  * Method function: 
  * Method Sets the item categories totals object into debtors   
  */
  this.setCards = function(financeSheet){
    this.cards = financeSheet.getCardNames();
  }
  
    /**
  * Method function: 
  * Method Sets the card totals object into debtors   
  */
  this.setItemCategories = function(financeSheet){
    this.itemCategories = financeSheet.pullAllCategoryNames();
  }
  
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
  * Method returns item categories total   
  */
  this.getItemCategories = function(){
    return this.itemCategories;
  }
  
  
    /**
  * Method function: 
  * Method aggregates the item totals into their respective card totals  
  * @param  moneyItem object that holds a transaction item 
  */
  this.addToCardTotals = function(moneyItem){ 
     if(moneyItem.getCardUsed() == "Citi bank"){
        this.cititotal += moneyItem.getItemPrice();
      }
      else if(moneyItem.getCardUsed() == "Capital one"){
        this.capitalOneTotal += moneyItem.getItemPrice();
      }
      else if(moneyItem.getCardUsed() == "Amex"){ 
        this.amexTotal += moneyItem.getItemPrice();
      } 
       else if(moneyItem.getCardUsed() == "Pay-pal"){
         this.payPalTotal += moneyItem.getItemPrice();
         var item = this.payPalTotal
      }
       else if(moneyItem.getCardUsed() == "Amazon"){
        this.amazonTotal += moneyItem.getItemPrice();
      }
      else if(moneyItem.getCardUsed() == "Main account"){
        this.mainAccountTotal += moneyItem.getItemPrice();
      
      }
  }
  
  /**
  * Method function: 
  * Method takes a money item and and the category names from the spreadsheet and sets the totals for each category 
  * @param  moneyItem object that holds a transaction item 
  */
  this.addToCategoryTotals = function(moneyItem){
    for(var i in this.itemCategories){
      var item = moneyItem.getCategory();
      if(i == moneyItem.getCategory()){
        this.itemCategories[i] += moneyItem.getItemPrice()
        break;
      }
      
    }
  }
  
   /**
  * Method function: 
  * Method takes a money item and and the category names from the spreadsheet and sets the totals for each category 
  * @param  moneyItem object that holds a transaction item 
  */
  this.addToCardTotalsTest = function(moneyItem){
    for(var i in this.cards){
      var item = moneyItem.getCardUsed();
      if(i == moneyItem.getCardUsed()){
        this.cards[i] += moneyItem.getItemPrice()
        break;
      }
      
    }
  }
  
  /**
  * Method function: 
  * Method takes a category arguement and if the category is in the dictionary it returns the value  
  * @param  category title string 
  * @returns  ajoining value total for the category  
  */
  this.getCardValue = function(card){
    if(card in this.cards){
      return this.cards[card]
    }
   }
   
  /**
  * Method function: 
  * Method takes a category arguement and if the category is in the dictionary it returns the value  
  * @param  category title string 
  * @returns  ajoining value total for the category  
  */
  this.getCategoryValue = function(categoryTitle){
    if(categoryTitle in this.itemCategories){
      return this.itemCategories[categoryTitle]
    }
   } 
  
  
  /**
  * Method function: 
  * Method Adds to the debtor totals    
  */  
  this.addToDebtorTotals = function(moneyItem){ 
      if(moneyItem.getReimbursable() == true){
        for(var i in this.debtors){
          if(i == moneyItem.getDebtor()){
            this.debtors[i] += moneyItem.getItemPrice();
            break;
          }
          
        }
      }
  }
  
   /**
  * Method function: 
  * Method takes a debtor arguement and if the debtor is in the dictionary it returns the value  
  * @param  debtor name string 
  * @returns  ajoining value total for the debt  
  */
  this.getDebtorValue = function(debtorValue){
     if(debtorValue in this.debtors){
      return this.debtors[debtorValue]
    }
  }
  
  /**
  * Method function: 
  *method gets the list of debtors and returns them
  * @returns dictionary of debtors   
  */
  this.getDebtors = function(){
    return this.debtors;
  }
  
  
  
  
  
}
