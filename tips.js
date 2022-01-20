

function Calc(){
 
 GetData();
   
}

function GetData(){
    var bill=document.getElementById("bill");
    var billPercent=document.getElementById("tipsPercent");
    var tipsAmount=document.getElementById("TipsAmount");
    var result=document.getElementById("total");
    
    var getbill=bill.value;
    var billper=billPercent.value;
    
    var percentageCal=(getbill*billper/100);
    
    tipsAmount.value=percentageCal;
    
    var getTipsValue=tipsAmount.value;
    
    var TotalValue=parseInt(getbill)+parseInt(getTipsValue);
    
    tipsAmount.value=percentageCal;
    result.value=TotalValue;
}
  
