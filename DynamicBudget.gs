// Dynamic budgeting will primarily be a way to dynamically adjust current budgets 
// such that any over runs reduces the amouts within the other budgets thus keeping spending 
// from growing beyond what it currently is at the moment  


// Build list 
//  - way to hold the percentages [in progress] 
//  - algorithm to find negative percentages or overages and to adjust the feeding percentages 
//    such that things are not negative  
//  - way to pull in the required percentages 
//  - way to put out thet adjusted percentages after the work is done 
//  - way to skip certain categories when doing the calculations 

dynamicBudget = function(sheet){ 
   // Budget holder object set 
   this.budgetNumbers = {} 
   
   // sheet object assigned
   this.sheet = sheet;
   
   /**
    * Method function: 
    * Method Sets the item  totals object into debtors   
    */
    this.setBudgetNumbers = function(row, column){
        while(this.sheet.getItem(row,column)!= ""){
          var budgetItemName = this.sheet.getItem(row,column);  
          var updateColumn = column + 1;
          this.budgetNumbers[budgetItemName] = setBudgetValues(row, updateColumn); 
          row++;
    
        }
    } 
       
    
    
    /** 
    * Method function: 
    * Method gets the values and sets them into an object 
    */ 
    this.setBudgetValues = function(row, column){ 
      values = {} 
      var budgetValue = this.sheet.getItem(row,column);  
      var spendValue =  this.sheet.getItem(row,column+1); 
      
      values['budgetValue'] = budgetValue; 
      values['spendValue'] = spendValue;  
      
      return values
   }
   
    /** 
    * Method function: 
    * Method gets the dynamic budget values from the container 
    */ 
    this.getValues = function(key){
      return this.budgetNumbers[key];
    
    }
    
    
    
  
   
  
  
  
  
  

}

