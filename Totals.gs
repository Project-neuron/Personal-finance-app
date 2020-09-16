itemTotal = function(){
  /**
  * The item total class handles all summation activity required by the application 
  * @constructor takes in a finance sheet object to do a load of the category names to the item categories
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */
  this.totals ={}; 
  
  
   /**
  * Method function: 
  * Method Sets the item categories totals object into the dict  
  */
  this.setTotals = function(totals){
    this.totals = totals;
  }
  
   /**
  * Method function: 
  * Method returns the totals
  */
  this.getTotals = function(){
    return this.totals;
  }
  

  
   /**
  * Method function: 
  * Method general summation method that adds to a specific total 
  * @param  moneyItem object that holds a transaction item 
  */
  this.addToTotals = function(moneyItemCheck, moneyItemPrice){
    for(var i in this.totals){
      var item = moneyItemCheck;
      if(i == moneyItemCheck){
        this.totals[i] += moneyItemPrice;
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
   this.getValue = function(item){
      if(item in this.totals){
        return this.totals[item];
     }
     else return "";
   }
   
}
