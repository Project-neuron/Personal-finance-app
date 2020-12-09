function equalsTest(item1, item2) {
 var result = ""
 if(item1 == item2){
   result = "Pass";
 }else{
   result = "Fail";
 }
  return result;
}

function doubleValueEqualsTest(item1, item2, item3){
  if(item1['budgetValue'] == item2 && item1['spendValue'] == item3){
  result = "Pass";
 }else{
   result = "Fail";
 }
  return result;
}
