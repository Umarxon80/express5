const multer=require("multer")
const path=require("path")


const store=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"upload")
    },
    filename:(req,file,cb)=>{
        let ext=path.extname(file.originalname)
        let nom= Date.now()+"-"+Math.round(Math.random() * 1e9)+ext
        cb(null,nom)
    }
})

const upload = multer({storage:store})

module.exports=upload