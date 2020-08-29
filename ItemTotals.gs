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
  
  this.itemCategories = financeSheet.pullAllCategoryNames();
  
  
  this.getCitiTotal = function(){
    return this.cititotal;
  }
  
  this.getCapitalOneTotal = function(){
    return this.capitalOneTotal;
  }
  
  this.getPayPalTotal = function(){
    return this.payPalTotal; 
  }
  
  this.getAmexTotal = function(){
    return this.amexTotal;
  }
  
  this.getAmazonTotal = function(){
    return this.amazonTotal;
  }
  
  // gathers all of the individual transactions and groups the total based on the card used 
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
  }
  
  /**
  * Method function: 
  * Method takes a money item and and the category names from the spreadsheet and sets the totals for each category 
  * @param  FinanceSheet object that manipulates the underlying google sheet, psudoextention of the sheet object 
  * @param  moneyItem object that holds a transaction item 
  */
  this.addToCategoryTotals = function(moneyItem){
    for(var i in this.itemCategories){
      if(this.itemCategories[i] == moneyItem.getCategory()){
        this.itemCategories[i] = moneyItem.getItemPrice()
        break;
      }
      
    }
    
     
   
  }
  
  
  // sets all of the card totals to the final sheet 
  this.setCardTotals = function(sheet){
    var totalsList = [this.cititotal, this.capitalOneTotal,this.amexTotal, this.payPalTotal, this.amazonTotal ]
    var row = 2; 
    var column = 2;   
    var i = 0;
    while(row <=6){
      sheet.setItem(row, column, totalsList[i])
      i++ 
      row++;
    }
    
  }
  
  // sets all of the budget totals to the final sheet 
   this.setBudgetTotals = function(sheet){
    var totalsList = [this.foodTotal, this.billTotal, this.miscTotal, this.fastFoodTotal]
    var row = 2; 
    var column = 3; 
    var i = 0;
    
    while(row <= 5){
      
      sheet.setItem(row, column, totalsList[i])
      i++ 
      row++;
      
    }
    
  }
  
}
