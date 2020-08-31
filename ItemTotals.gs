itemTotal = function(financeSheet){
  /**
  * The item total class handles all summation activity required by the application 
  * @constructor takes in a finance sheet object to do a load of the category names to the item categories
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */
 

  this.cititotal = 0; 
  this.capitalOneTotal = 0;
  this.payPalTotal = 0; 
  this.amexTotal = 0; 
  this.amazonTotal = 0;
  this.mainAccountTotal = 0;
  
  this.itemCategories = financeSheet.pullAllCategoryNames();
  
    /**
  * Method function: 
  * Method returns a credit card total list  
  */
  this.getTotalsList = function(){
    var totalsList = [this.cititotal, this.capitalOneTotal,this.amexTotal, this.payPalTotal, this.amazonTotal, this.mainAccountTotal];
    return totalsList;
  }
  
  this.getItemCategories = function(){
    return this.itemCategories;
  }
  
    /**
  * Method function: 
  * Method returns a credit card total   
  */
  this.getCitiTotal = function(){
    return this.cititotal;
  }
  
    /**
  * Method function: 
  * Method returns a credit card total   
  */
  this.getCapitalOneTotal = function(){
    return this.capitalOneTotal;
  }
  
    /**
  * Method function: 
  * Method returns a credit card total   
  */
  this.getPayPalTotal = function(){
    return this.payPalTotal; 
  }
  
   /**
  * Method function: 
  * Method returns a credit card total   
  */
  this.getAmexTotal = function(){
    return this.amexTotal;
  }
  
     /**
  * Method function: 
  * Method returns a credit card total   
  */
  this.getAmazonTotal = function(){
    return this.amazonTotal;
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
  * @param  FinanceSheet object that manipulates the underlying google sheet, psudoextention of the sheet object 
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
  * Method takes a category arguement and if the category is in the dictionary it returns the value  
  * @param  category title string 
  * @returns  ajoining value total for the category  
  */
  this.getCategoryValue = function(categoryTitle){
    if(categoryTitle in this.itemCategories){
      return this.itemCategories[categoryTitle]
    }
    
    
  } 
  
  
  
  
}
