const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  workstatus: {
    type: String,
  },

  workexperince: {
    type: String,
    default:null
   
  },
  step: {
    type: String,
    default: 1 

  },
  company: {
    type: String,
    default: null
  },
  jobtitle: {
    type: String,
    default:null
  },
  current_city: {
    type: String,
    default:null
  },
  annual_salary:{

    type: String,
    default:null
  },
  state:{

    type: String,
    default:null
  },
  skils:{

    type: [String],
    default:null
  },
  industry:{

    type: String,
    default:null
  },
  department:{

    type: String,
    default:null
  },
  role:{

    type:String
  },
  qualification:{

    type: [String],
    default:null
  },
  qualificationDetails:{

    type: [String],
    default:null
  },


  working_since: {
    type: Date,
    default:null
    
  },
  notice_period: {
    
    type: String,
    default:null
  }
});

module.exports = Register = mongoose.model('register', RegisterSchema);