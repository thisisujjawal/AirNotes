const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Note = require('../models/Note');
const {body , validationResult} = require('express-validator');
const User = require('../models/User');

router.post('/getnote' , verifyToken , async(req, res) =>{
    try {
        const note = await Note.findById(req.body.noteId);
        if(note.author == req.userId){
            return res.status(200).send(note);
        }else{
            return res.status(400).json({error : true , msg : "You are not allowed to access this note"})
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({error : error.message});
    }
})
router.post('/addnote' , verifyToken, [
    body('title',"Title cannot be blank").isLength({min : 1}),
    body('description', 'Description cannot be blank').isLength({min : 1}),
], async(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).json({error: error.array()});
    }
    try {
        const user = await User.findById(req.userId);
        const notes = await Note.create({
            title : req.body.title,
            description : req.body.description,
            author : req.userId,
        })
        const newNotes = [...user.notes , {id : notes._id, title : req.body.title}];
        const result = await User.updateOne({_id : req.userId} , {$set:{notes : newNotes}});
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(400).json({error : true, msg : error.message});
    }

})

router.delete('/deletenote/:noteId' , verifyToken, async(req, res)=>{
    try {
        console.log(req.params);
        const user = await User.findById(req.userId);
        const note = await Note.findById(req.params.noteId);
        if(note.author == req.userId){
            const noteResult = await Note.deleteOne({_id : req.params.noteId});
            const newNotes = user.notes.filter(note => note.id != req.params.noteId);
            const userResult = await User.updateOne({_id : req.userId} , {$set:{notes : newNotes}});
            return res.status(200).json({noteResult , userResult});
        }else{
            return res.status(400).json({error : true , msg : "You are not allowed to delete this note"});
        }
    } catch (error) {
        return res.status(400).json({error : true, msg : error.message});
    }

})

router.put('/updatenote' , verifyToken, async(req, res)=>{
    try {
        const user = await User.findById(req.userId);
        const note = await Note.findById(req.body.noteId);
        if(note.author == req.userId){
            const noteResult = await Note.findByIdAndUpdate(req.body.noteId, {$set:{title : req.body.title, description : req.body.description}}, {new : true});
            const newNotes = user.notes.map(note => note.id == req.body.noteId ? {...note, title : req.body.title} : note);
            const userResult = await User.updateOne({_id : req.userId} , {$set:{notes : newNotes}});
            console.log(noteResult);
            return res.status(200).json(noteResult);
        }else{
            return res.status(400).json({error : true , msg : "You are not allowed to update this note"});
        }
    } catch (error) {
        return res.status(400).json({error : true, msg : error.message});
    }

})

module.exports = router;