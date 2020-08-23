moneyitem = function(itemName, itemPrice, cardUsed, category, reimbursable, debtor) { 
    this.itemName = itemName 
    this.itemPrice = itemPrice
    this.cardUsed = cardUsed 
    this.category = category 
    this.reimburable = reimbursable 
    this.debtor = debtor 
    
    this.getItemName = function(){
      return this.itemName;
    } 
    
    this.getItemPrice = function(){
      return this.itemPrice;
    }
    this.getCardUsed = function(){ 
      return this.cardUsed; 
    }
    this.getCategory = function(){
     return this.category;
    }
    
    this.getReimbursable = function(){
      return this.reimbursable; 
    
    } 
    
    this.getDebtor = function(){
      return this.debtor; 
    }
    
    
    
  
}
