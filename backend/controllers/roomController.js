import Room from "../models/roomModel.js";
import path from 'path';
import fs from 'fs';

export const getRoom = async(req, res) => {
    try {
        const response = await Room.findAll()
        res.json(response);
    } catch (error) {
        console.log(error.message)
    }
}

export const getRoomById = async(req, res) => {
    try {
        const response = await Room.findOne({
            where: {
                id : req.params.id
            }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const addRoom = (req, res) => {
    if (req.files === null) return res.status(400).json({msg: 'No File Uploaded'});
    const { kode , tipe, fasilitas, ukuran, price} = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: 'Invalid Images'});
    if(fileSize > 5000000) return res.status(422).json({msg: 'Image must be less than 5 MB'});

    file.mv(`./public/images/${fileName}`, async(err) => {
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Room.create({kode: kode, tipe: tipe, fasilitas: fasilitas, ukuran: ukuran, image: fileName, url: url, price: price});
            res.status(201).json({msg: 'Room Created Successfuly'})
        } catch (error) {
            console.log(error.message)
        }
    })
    
}

export const editRoom = async(req, res) => {
    const room = await Room.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!room) return res.status(404).json({msg : 'No Room Found!'});
    let fileName = '';
    if(req.files === null) {
        fileName = Room.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: 'Invalid Images'});
        if(fileSize > 5000000) return res.status(422).json({msg: 'Images must be less than 5 MB'});

        const filepath = `./public/images/${room.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if(err) return res.status(500).json({msg: err.message});
        });
    }

    const { kode , tipe, fasilitas, ukuran, price} = req.body;
    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
    try {
        await Room.update({ kode: kode, tipe: tipe, fasilitas: fasilitas, ukuran: ukuran, image: fileName, url: url, price: price}, {
            where: {
                id : req.params.id
            }
        });
        res.status(200).json({msg: 'Room Updated Successfully!'});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRoom = async(req, res) => {
    const room = await Room.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!room) return res.status(404).json({msg: 'No room  found!'});

    try {
        const filepath = `./public/images/${room.image}`;
        fs.unlinkSync(filepath);
        await Room.destroy({
            where: {
                id : req.params.id
            }
        });
        res.status(200).json({msg: 'Room Delected Successfully'});
    } catch (error) {
        console.log(error.message)
    }
}