var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(SalesData, salesTax) {
  

  var obj=[]
  var sale = []

  for (var x in salesTax){
    var dummy = salesTax[x]
    sale.push(dummy);
  }


  for (var i = 0; i<SalesData.length;i++){
    obj[i] = SalesData[i]["sales"];
    
  }

  var Tot=[];
  var taxTot=[];
  for (var j = 0; j<SalesData.length; j++){
    var sum = 0;
    var sum1=0;
  for (var k = 0; k<obj[j].length; k++){
    sum1+=(obj[j][k] * sale[j])
    sum+=obj[j][k]
  }
  Tot[j] = sum;
  taxTot[j] = sum1;
  }

  var final = {};

  for (var i = 0; i < SalesData.length; i++){
    final[SalesData[i].name] = {totalSales: Tot[i], totalTaxes: taxTot[i]}
  }


  return console.log(final)

}

var results = calculateSalesTax(companySalesData, salesTaxRates);