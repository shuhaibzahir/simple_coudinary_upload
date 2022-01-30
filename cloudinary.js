const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key:process.env.CLOUDINARY_SECRET, 
    api_secret: process.env.CLOUDINARY_KEY
});

// exports.uploads = (file,folder)=>{
//     return new Promise((resolve,reject)=>{
//         cloudinary.uploader.upload(file,(result)=>{
//             resolve({
//                 url:result.url,
//                 id:result.public_id
//             })
//         },{
//             resource_type:'auto',
//             folder:folder
//         })
//     })
// }

// exports.destroy=(fileid)=>{
//  return new Promise((resolve,reject)=>{
//     cloudinary.uploader.destroy(fileid).then((result) => {
//         resolve(result)
//     }).catch((err) => {
//         reject(err)
//     });
//  })
// }

// if you are using promise comment this and un comment above code
module.exports = cloudinary