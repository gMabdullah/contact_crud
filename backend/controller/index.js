import {db} from "../db/config.js";

export const getContacts = (req, res)=>{
    const getAllContacts = "select * from contacts";
    db.query(getAllContacts, (err, result)=>{
        if(!err){
            res.send(result)
        }else{
            console.error(err)
        }
    })
 }

export const addContact = (req, res)=> {
    const {name, email, phone_no } = req.body;
   const addQuery = "INSERT INTO contacts (name, phone_no, email) values (?,?,?)"
   db.query(addQuery, [name, phone_no, email ], (err, result)=>{
       if(!err){
           res.send("Succesfully added a contact")
       }else{
           console.error(err)
       }
   })
}

export const getSingleContact = (req, res) => {
    const id = req.params.id
    const getsingleContact = "select * from contacts where id = ?";
    db.query(getsingleContact, [id], (err, result)=>{
        if (!err) {
            res.send(result)
        }else{
            res.send("User not found")
        }
    })
}

export const updateContact = (req, res) => {
    const id = req.params.id;
    const {name, email, phone_no} = req.body
    const updateQuery = "UPDATE contacts SET name = ?, email = ?, phone_no = ? WHERE id = ?";
    db.query(updateQuery, [name,email,phone_no,id], (err, result)=>{
        if(!err){
            res.send(result)
        }else{
            console.log(err)
        }
    })
}

export const deleteContact = (req, res)=> { 
    const id = req.params.id;
    const deleteQuery = "delete from contacts where id = ?"
    db.query(deleteQuery, [id], (err, result)=>{
        if (!err) {
            res.send("Succesfully deleted this contact")
        }else{
            res.send("Hasn't been deleted! Try again")
        }
    })
}