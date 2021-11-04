const Lecturedb = require('../model/lectureModel');

// Lectures Db
// create and save new student
exports.create = (req, res)=>{
    //vallidate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    // new student
    const lectureData = new Lecturedb({
        lecture : req.body.lecture,
        professorName : req.body.professorName,
        lectureRoom : req.body.lectureRoom,
        phoneNumber : req.body.phoneNumber,
        time : req.body.time
    })

    // save student in the database
    lecture
        .save(lectureData)
        .then(data=>{
            res.redirect('/add-lecture')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while creating a create uperation"
            });
        });

}

// retrive and return all users/ retrive and raeturn a single student
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;
        Lecturedb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message : "Not found user with id:" + id})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message : "Error retrieving user with id" + id})
            })

    }else{
        Lecturedb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message : err.message || "Error"})
            })
        }
}

//update a new idetified student by student id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message : "Data to update can not be empty"})
    }
    const id = req.params.id;
    Lecturedb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.statud(404).send({ message : "cannot update user with " + id + "maybe user not found"})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message : "Error Update User Information"})
        })
}

// Delete a student specified studentID in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Lecturedb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:'Cannot Delete with id ' + id + "Maybe id is wrong"})
            }else{
                res.send({
                    message : "User was deleted successfully"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message : "Could not delete User with id =" + id
            });
        });

}