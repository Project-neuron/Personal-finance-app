moneyItemList = function() { 
  this.cititotal = 0; 
  this.capitalOneTotal = 0;
  this.payPalTotal = 0; 
  this.amexTotal = 0; 
  this.amazonTotal = 0;
  
  this.foodTotal = 0; 
  this.miscTotal = 0; 
  this.billTotal = 0;
  this.fastFoodTotal = 0; 
  this.list = []
  
  
  /* 
      to-do convert this function into one that can clear all items on the list at the end of each month 
  */
   this.clearAllItems = function(sheet){
    var row = 2; 
    var column = 1; 
   
    while(sheet.getItem(row,column) != ""){
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column,"");
        column ++;
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column, "");
        column ++;
        sheet.setItem(row,column, "");
        column++;
        sheet.setItem(row,column, "");
        column++;
        sheet.setItem(row,column, "");
        row ++;
        column=1;
      }
  
  }
  
  // pulls all the items and assigns values to the totals variables 
  this.pullAllItems = function(sheet){
    var row = 2; 
    var column = 1; 
    while(sheet.getItem(row,column)!= ""){
      var itemName = sheet.getItem(row,column);
      column ++;
      var itemPrice = sheet.getItem(row,column);
      column ++;
      var cardUsed = sheet.getItem(row,column);
      column ++;
      var purchaseCategory = sheet.getItem(row,column);
      column ++;
      var reimbersable = sheet.getItem(row,column);
      column ++; 
      var debtor = sheet.getItem(row,column);
      column ++;
      
       

      var moneyItem = new moneyitem(itemName, itemPrice, cardUsed, purchaseCategory, reimbersable, debtor);
      this.addToCardTotals(moneyItem); 
      this.addToCategoryTotals(moneyItem);

      this.list.push(moneyItem);
      row ++;
      column=1; 
      
    } 
  
    
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
  
  /*
    Todo - expand the categories  
    House item
    Auto 
    Groceries 
  */
  // Gathers all of the individual transactions and groups them based on the category they are 
  this.addToCategoryTotals = function(moneyItem){
    if(moneyItem.getCategory() == "Food"){
        this.foodTotal += moneyItem.getItemPrice();
      }
      else if(moneyItem.getCategory() == "Bills"){
        this.miscTotal += moneyItem.getItemPrice();
      }
      else if(moneyItem.getCategory() == "misc"){
         this.billTotal += moneyItem.getItemPrice();
      } 
       else if(moneyItem.getCategory() == "Fast food"){
        this.fastFoodTotal += moneyItem.getItemPrice();
      }
  }
  
  // sets all of the card totals to the final sheet 
  this.setCardTotals = function(sheet){
    var totalsList = [this.cititotal, this.capitalOneTotal,this.amexTotal, this.payPalTotal,this.amazonTotal ]
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
  
  /*
    To-do set up a function that handles reimbursement items, in that it moved them to a reimbursement list 
    with it's own totals 
  */
}
