const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  location: {
    type: locationSchema,
    required: true,
  },
});

module.exports = mongoose.model('company', companySchema);
