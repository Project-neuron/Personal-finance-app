sheet = function(index){
   this.app = SpreadsheetApp;
   this.sheets = this.app.getActiveSpreadsheet().getSheets();
   this.activeSheet = this.sheets[index];
   
   this.changeSheet = function(index){
     return this.sheets[index]
   }
   
   this.getItem = function(row, column){
     return this.activeSheet.getRange(row, column).getValue();
   }
   
   this.setItem = function(row, column, setting){
     this.activeSheet.getRange(row, column).setValue(setting);
   }
   
   this.getActiveSheet = function(){
     return this.activeSheet;
   } 
   
   this.getRange = function(row, column,startColumn, endColumn){
     return this.activeSheet.getRange(row, column, startColumn, endColumn).getValues()[0]; 
   }
 
}



  
  



