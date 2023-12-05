const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");
const { zkKYCPassport } = require("./vcHelpers/zkKYCPassport");

require("dotenv").config();

const humanReadableAuthReason = process.env.AUTH_REASON;

const credentialSubject = {
  birthday: {
    $lt: 20231201,
  },
};

const proofRequest = KYCAgeCredential(credentialSubject);

//------------------------------------------------------------

// const credentialSubject = {
//   Sex: {
//     $eq: "Female",
//   },
// };

// const proofRequest = zkKYCPassport(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
