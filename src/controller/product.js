const {
    modelAllProducts,
    modelTotalProducts,
    modelInsertProduct
} = require('../model/product')

const { success, failed, notFound } = require('../helper/response')

module.exports = {
    getAllProducts: async (req, res)=>{
        try {
            const searchParams = req.query.searchParams ? req.query.searchParams : 'name' // default parameter for searching ex. (id, name, price)
            const search = req.query.search ? req.query.search : '' // default to search from the parameter (searchParams) ex. (burger, french fries, etc).
            const param = req.query.param ? req.query.param : 'id'  // default parameter for sorting ex. (id, name, price)
            const sort = req.query.sort ? req.query.sort : 'ASC'    // sorting default (ascending or descending) ex. (asc and desc)
            const limit = req.query.limit ? req.query.limit : 3     // default for limit data in one page
            const page = req.query.page ? req.query.page : 1        // default page number
            const offset = page===1 ? 0 : (page-1)*limit            // page start limit
            const responseTotal = await modelTotalProducts(searchParams, search) // count total page
        
            modelAllProducts(searchParams, search, param, sort, offset, limit)
            .then((response)=>{
                const data = response
                const pagination = {
                    page: page,
                    limit: limit,
                    totalData: responseTotal[0].total,
                    totalPage: Math.ceil(responseTotal[0].total / limit) // to upward the page to its nearest integer
                }
                if(response.length > 0){
                    success(res, data, pagination, 'Get all products success')
                }else{
                    notFound(res,"Data unavailable", data)
                }
            }).catch((err)=>{
                failed(res, 'Internal server error', err)
            })
        } catch (error) {
            failed(res, 'Internal server error', [])
        }
    },
    insertProducts: (req, res)=>{
        try {
            const data = {
                name: req.body.name,
                price: req.body.price
            }
            if(!data.name || !data.price){
                failed(res, 'All textfield is required!', [])
            }else{
                modelInsertProduct(data)
                .then((response)=>{
                    success(res, response, {}, 'Insert product success')
                }).catch((err)=>{
                    failed(res, 'All textfield is required!', [])
                })
            }
        } catch (error) {
            failed(res, 'Internal server error', [])
        }
    }
}