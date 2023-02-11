//Configuration
let {billInfo} = require('../billJson')

// GET: Return in JSON list of medical bills
const getBills = (req,res)=>{
    res.status(200).json({medicalBills: billInfo})
}

// POST: Create a medical bill with inputted JSON and put into our list of medical bills
const createBill = (req,res)=>{
    console.log(req.body)
    const list = req.body
    console.log(list)

    if( !list.name || !list.hospitalName||!list.serviceDate||!list.billAmount ){
     return res.status(400).json({success: false,message:"please provide some data"})
    }
     billInfo.push(list)
    res.status(201).json({newMedicalBill: list})
    
}

// PUT: Updates medical bill  with provided JSON if request parameter equals a name on a medical bill
const updateBill = (req,res)=>{
    const{name} = req.params
    const list = req.body
    const bill = billInfo.find((bill)=>bill.name == name)
    if(!bill){
        return res.status(404).json({success: false,message: `Cannot find ${name}`  })
    }
    const newBillList = billInfo.map((bill)=>{
        if(bill.name === name){
            bill.name = list.name
            bill.hospitalName = list.hospitalName
            bill.serviceDate = list.serviceDate
            bill.billAmount = list.billAmount
        }     
    })
    res.status(200).json({success: true, updatedBill: bill})
}

// GET: Gets the medical bill if request parameter equals a name on medical bill
const searchBill = (req,res)=>{

    const {name} = req.params
    console.log(name)
 
    const bill = billInfo.find((bill)=>bill.name == name)
     if(!bill){
         return res.status(404).json({success: false,message: `Cannot find ${name}`  })
     }
     
     res.status(200).json({searchedBill: bill})  
}

// DELETE: Deleted a medical bill if request parameter equals a name on medical bill
const deleteBill = (req,res)=>{
    const{name} = req.params
    const list = req.body
    const bill = billInfo.find((bill)=>bill.name == name)
    if(!bill){
        return res.status(404).json({success: false,message: `Cannot find ${name}`  })
    }

    const newBillList = billInfo.filter(
        (bill) => bill.name !== name
    )
    billInfo = newBillList
      return res.status(200).json({ success: true, updatedMedicalBillsList: billInfo })


      module.exports = {

      }
}
// Exporting functions
module.exports = {
    getBills,
    createBill,
    updateBill,
    searchBill,
    deleteBill
}