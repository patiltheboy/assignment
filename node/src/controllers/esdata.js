const esdata = require("../models/esdata")

const getAllData = async (req, res) => {
    try {
        const data = await esdata.find()

        return res.json({ status: "success", data: data })
    } catch (error) {
        return res.json({ status: 'error', message: error.message })
    }
}
const getData = async (req, res) => {
    try {
        // const data = await esdata.find().select('Mode TerminalID_To TerminalID')
        const BeiDou_Q = await esdata.countDocuments({Mode: 'BeiDou Q'})
        const TerminalID = await esdata.distinct('TerminalID').count()
        const TerminalID_To = await esdata.distinct('TerminalID_To').count()

        return res.json({ status: "success", data: {
            BeiDou_Q, TerminalID, TerminalID_To
        } })
    } catch (error) {
        return res.json({ status: 'error', message: error.message })
    }
}

module.exports = {
    getAllData,
    getData
}