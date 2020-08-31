/**
  * Base sheet class with all the basic function 
  * @author  Elvis Okumu
  * @version 1.0
  * @since   2020-08-28 
  */

sheet = function(index){
   this.app = SpreadsheetApp;
   this.sheets = this.app.getActiveSpreadsheet().getSheets();
   this.activeSheet = this.sheets[index];
   
     /**
  * Method function: 
  * Method Switches sheets   
  */
   this.changeSheet = function(index){
     return this.sheets[index]
   }
   
     /**
  * Method function: 
  * Method gets an item from the sheet  
  */
   this.getItem = function(row, column){
     return this.activeSheet.getRange(row, column).getValue();
   }
   
     /**
  * Method function: 
  * Method sets a value into a sheet 
  */
   this.setItem = function(row, column, setting){
     this.activeSheet.getRange(row, column).setValue(setting);
   }
   
     /**
  * Method function: 
  * Method returns the active sheet   
  */
   this.getActiveSheet = function(){
     return this.activeSheet;
   } 
   
     /**
  * Method function: 
  * Method returns a series of values from a sheet  
  */
   this.getRange = function(row, column,startColumn, endColumn){
     return this.activeSheet.getRange(row, column, startColumn, endColumn).getValues()[0]; 
   }
 
}



  
  



