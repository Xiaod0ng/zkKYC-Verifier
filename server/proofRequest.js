const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");
const { zkKYCPassport } = require("./vcHelpers/zkKYCPassport");
const { KYC } = require("./vcHelpers/KYC");
const { KYC2 } = require("./vcHelpers/KYC2");

require("dotenv").config();

const humanReadableAuthReason = process.env.AUTH_REASON;

// const proofRequest = KYCAgeCredential(credentialSubject);

// const proofRequest = zkKYCPassport(credentialSubject);

const proofRequest1 = KYC();
const proofRequest2 = KYC2();

module.exports = {
  humanReadableAuthReason,
  proofRequest1,
  proofRequest2,
};
