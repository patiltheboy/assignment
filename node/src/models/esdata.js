const mongoose = require("mongoose");


const esSchema = new mongoose.Schema({
  "status": { type: String },
  "Type": { type: String },
  "Start_Time": { type: String },
  "Finish_Time": { type: String },
  "Oper_Time": { type: String },
  "ID": { type: String },
  "ID_Parent_Record": { type: String },
  "ID_Session_From": { type: String },
  "ID_Session_To": { type: String },
  "Duration": { type: String },
  "ContentType": { type: String },
  "Source": { type: String },
  "InfoDBServer": { type: String },
  "Mode": { type: String },
  "Name_DB": { type: String },
  "String": { type: String },
  "IDInfoBuffer": { type: String },
  "FileLen": { type: String },
  "TerminalID": { type: String },
  "TerminalID_To": { type: String },
  "MessageType": { type: String },
  "IDEntryPoint": { type: String },
  "CRC_OK": { type: String },

}, { timestamps: true })


const esdata = new mongoose.model("esdata", esSchema);
module.exports = esdata;