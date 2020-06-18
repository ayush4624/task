var td=`{
"requestID":"1",
"transDate":"01-04-2020",
"transTypeCode":"SVC-R",
"currency":"USD",
"amount":"1500",
"promoCode":"KOTAKFIRST",
"channel": "PORTAL",
"rate":"77.31",
"ibr":"75.31",
"cardRate":"77.31",
"perUnit":"1",
"buySellSign":"-1",
"orgCharges":"100",
"lcyAmount":"115965"
}`
var cd=`{   "cif":"12345",
    "customerCategory":[
     "EMPLOYEE",   "WEALTH"
    ],
    "usedCodes":
        [
            {
                "codeType":"P",
                "codeName":"KOTAKFIRST",
                "usedCount":"1"
            },
            {
                "codeType":"D",
                "codeName":"STUDENT",
                "usedCount":"2"
            }
        ]              
}`
var oc=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","EMPLOYEE"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc2=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile","portal"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","EMPLOYEE"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc3=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile","portal"],
                "transTypeCode":["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc4=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER","EMPLOYEE","WELTH"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc5=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc6=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc7=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-05-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc8=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","EMPLOYEE"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`





var obj1=JSON.parse(td);
var obj2=JSON.parse(cd); 
var obj3=JSON.parse(oc);
var obj4=JSON.parse(oc2);
var obj5=JSON.parse(oc3);
var obj6=JSON.parse(oc4);
var obj7=JSON.parse(oc5);
var obj8=JSON.parse(oc6);
var obj9=JSON.parse(oc7);
var obj10=JSON.parse(oc8);
var output9;


function isCodeApplicable(td,cd,oc){
	var output;
	console.log(!oc.termsFilter.channel.includes(td.channel),oc.termsFilter.channel,td.channel);
	if (!oc.termsFilter.channel.includes(td.channel))
	{

	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`Channel '${td.channel}' is Not Applicable for STUDENT,  Aviailable Channels ${oc.termsFilter.channel.toString()}`

}	
console.log(output);
}


}
isCodeApplicable(obj1,obj2,obj3)
function isCodeApplicable2(td,cd,oc2){
	var output2;
	console.log(!td.transTypeCode.includes(oc2.termsFilter.transTypeCode),td.transTypeCode,oc2.termsFilter.transTypeCode);
	if (!td.transTypeCode.includes(oc2.termsFilter.transTypeCode))
	{

	    output2={
       "requestID":td.requestID,
       "codeType":oc2.codeType,
        "validFor":oc2.validFor,
        "codeName":oc2.codeName,
        "applicable":"N",
        "message":`Transaction Type "${td.transTypeCode}" is not Applicable for STUDENT, Available Transaction Types ${oc2.termsFilter.transTypeCode.toString()}`              


}	
console.log(output2);
}


}
isCodeApplicable2(obj1,obj2,obj4)
function isCodeApplicable3(td,cd,oc3){
	var output3;
	console.log(!cd.customerCategory.includes(oc3.termsFilter.customerCategory),cd.customerCategory,oc3.termsFilter.customerCategory);
	if (!cd.customerCategory.includes(oc3.termsFilter.customerCategory))
	{

	    output3={
       "requestID":td.requestID,
       "codeType":oc3.codeType,
        "validFor":oc3.validFor,
        "codeName":oc3.codeName,
        "applicable":"N",
        "message":`"Customer Category "${cd.customerCategory}" is Not Applicable Student Available Customer Categories "$oc3.termsFilter.customerCategory" 
}`              


}	
console.log(output3);
}


}
isCodeApplicable3(obj1,obj2,obj5)
function isCodeApplicable4(td,cd,oc4){
	var output4;
	console.log(!td.currency.includes(oc4.termsFilter.currency),td.currency,oc4.termsFilter.currency);
	if (!td.currency.includes(oc4.termsFilter.currency))
	{

	    output4={
       "requestID":td.requestID,
       "codeType":oc4.codeType,
        "validFor":oc4.validFor,
        "codeName":oc4.codeName,
        "applicable":"N",
        "message":`"currency "${td.currency}" is Not Applicable STUDENT available currency "${oc4.termsFilter.currency}"
    }`              


}	
console.log(output4);
}


}
isCodeApplicable4(obj1,obj2,obj6)
function isCodeApplicable5(td,cd,oc5){
	var output5;
	console.log(oc5.minMaxAmountType=="LCY");
	if (!(td.lcyAmount> oc5.minimumINRAmount && td.lcyAmount<oc5.maximumINRAmount))
	{

	    output5={
       "requestID":td.requestID,
       "codeType":oc5.codeType,
        "validFor":oc5.validFor,
        "codeName":oc5.codeName,
        "applicable":"N",
        "message":`"LCY Amount "${td.lcyAmount}" is Not with in Range STUDENT Range is form "${oc5.minimumINRAmount}". " 
}`              


}	
console.log(output5);
}


}
isCodeApplicable5(obj1,obj2,obj7)
function isCodeApplicable6(td,cd,oc6){
	var output6;
	
	if (!(td.lcyAmount>oc6.minimumINRAmount && td.lcyAmount<oc6.maximumINRAmount))
	{

	    output6={
       "requestID":td.requestID,
       "codeType":oc6.codeType,
        "validFor":oc6.validFor,
        "codeName":oc6.codeName,
        "applicable":"N",
        "message":`"FCY Amount"   
}`              


}	
console.log(output6);
}


}
isCodeApplicable6(obj1,obj2,obj8)
function isCodeApplicable7(td,cd,oc7){
	console.log("ap");
	var output7;
	
	var  startDateTime= "01/05/2020";
var endDateTime = "01/07/2020";
var transDate = "01/04/2020";

var d1 = startDateTime.split("/");
var d2 = endDateTime.split("/");
var c = transDate.split("/");

var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  
var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
var check = new Date(c[2], parseInt(c[1])-1, c[0]);
console.log("sh");

if(check >  from &&  check <  to)
	{console.log("mj");

	    output7={
       "requestID":td.requestID,
       "codeType":oc7.codeType,
        "validFor":oc7.validFor,
        "codeName":oc7.codeName,
        "applicable":"N",
        "message":`"Transaction Date 01/04/2020 is Not Within Range Student Range is form 01/05/2020 00:00:00 to 01/07/2020 00:00:00 " 
}`              


}	
console.log(output7);
}


}
isCodeApplicable7(obj1,obj2,obj9)
function isCodeApplicable8(td,cd,oc8){
	var output8;
	
	if (!cd.usedCodes.length<oc8.maximumUsagePerCustomer)
	{

	    output8={
       "requestID":td.requestID,
       "codeType":oc8.codeType,
        "validFor":oc8.validFor,
        "codeName":oc8.codeName,
        "applicable":"N",
        "message":`"Customer has already used  maximim no of usages "${oc8.maximumUsagePerCustomer}" available for "${oc8.codeName}"  
}`              


}	
console.log(output8);
}


}
isCodeApplicable8(obj1,obj2,obj10)


 var output9={"requestID":"1",
       "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "applicable":"N",
        "message":" "}
        console.log(output9);





