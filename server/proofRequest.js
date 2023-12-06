const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");
const { zkKYCPassport } = require("./vcHelpers/zkKYCPassport");
const { KYC } = require("./vcHelpers/KYC");

require("dotenv").config();

const humanReadableAuthReason = process.env.AUTH_REASON;

// const proofRequest = KYCAgeCredential(credentialSubject);

// const proofRequest = zkKYCPassport(credentialSubject);

const proofRequest = KYC();

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
