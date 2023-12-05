const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");
const { zkKYCPassport } = require("./vcHelpers/zkKYCPassport");
const { KYC } = require("./vcHelpers/KYC");

require("dotenv").config();

const humanReadableAuthReason = process.env.AUTH_REASON;

// const credentialSubject = {
//   birthday: {
//     $lt: 20231201,
//   },
// };

// const proofRequest = KYCAgeCredential(credentialSubject);

//------------------------------------------------------------

// const credentialSubject = {
//   Sex: {
//     $eq: "Female",
//   },
// };

// const proofRequest = zkKYCPassport(credentialSubject);

//------------------------------------------------------------
const credentialSubject = {
  birthday: {
    $lt: 20231201,
  },
};

const proofRequest = KYC(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
