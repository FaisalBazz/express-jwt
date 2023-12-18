const axios = require('axios');

const fetchApi = async (req, res) => {
    try {
        const response = await axios.get('https://reqres.in/api/users?page=2')
        console.log(response.data)

        res.status(200).json({
            message: "Data Berhasil didapat!",
            data: response.data.data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const postData = async (req, res) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://reqres.in/api/users',
            data: {
                name: req.body.name,
                job: req.body.job
            }
        })

        res.status(200).json({
            message: "Data Berhasil di kirim!",
            data: response.data
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const updateData = async (req, res) => {
    try {
        var id = req.params.id
        const response = await axios({
            method: 'put',
            url: 'https://reqres.in/api/users/'+ id,
            data: {
                name: req.body.name,
                job: req.body.job
            }
        })

        res.status(200).json({
            message: "Data Berhasil di Update!",
            data: response.data
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deleteData = async (req,res) => {
    try {
        var id = req.params.id
        const response = await axios({
            method: 'delete',
            url: 'https://reqres.in/api/users/'+ id,
        })

        res.status(200).json({
            message: "Data Berhasil di Hapus!",
            data: response.data
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    fetchApi,
    postData,
    updateData,
    deleteData
}