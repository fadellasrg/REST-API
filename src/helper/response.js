module.exports = {
    success: (res, data, pagination, message) => {
        const response = {
            code: 200,
            message,
            pagination,
            data
        }
        res.json(response)
    },
    notFound: (res, message, data) => {
        const response = {
            code: 204,
            message,
            data
        }
        res.json(response)
    },
    failed: (res, message, data) => {
        const response = {
            code: 500,
            message,
            data
        }
        res.json(response)
        // res.status(500).json(response)
    }
}