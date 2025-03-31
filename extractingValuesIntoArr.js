let exObject = {benefits: [
    {
      benefitID: 1,
      benefitName:"benefitName1"
    }, 
    {
      benefitID: 2,
      benefitName:"benefitName2"
    }
]};

//let returnObj = {benefits: [{benefit}]}
let [{benefitID:ID, benefitName:title}] = exObject.benefits
console.log(ID)

//console.log([{benefitID:ID, benefitName:title}] = exObject.benefits);