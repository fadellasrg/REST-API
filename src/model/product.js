const connection = require('../config/db')

module.exports = {
    modelAllProducts: (searchParams, search, param, sort ,offset, limit) => {
        return new Promise ((resolve, reject)=>{
            connection.query(`SELECT *, DATE_FORMAT (created_at, '%d %M %Y') created_at FROM products
            WHERE ${searchParams} LIKE '%${search}%' ORDER BY ${param} ${sort}
            LIMIT ${offset}, ${limit} `
            ,(err, result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelTotalProducts: (searchParams, search) => {
        return new Promise ((resolve, reject)=>{
            connection.query(`SELECT COUNT(*) as total FROM products WHERE ${searchParams} LIKE '%${search}%'`
            ,(err, result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelInsertProduct: (data) => {
        return new Promise ((resolve, reject)=>{
            connection.query(`INSERT INTO products (name, price)
            VALUES ( '${data.name}', '${data.price}' ) `
            , (err, result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    }
}