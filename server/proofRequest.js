const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");
const { zkKYCPassport } = require("./vcHelpers/zkKYCPassport");

// https://devs.polygonid.com/docs/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be born before this year";

const credentialSubjectAge = {
  birthday: {
    // users must be born before this year
    // birthday is less than Jan 1, 2023
    $lt: 20230101,
  },
};

const credentialSubject = {
  DateOfBirth: {
    $lt: 20230101,
  },
};

// const proofRequest = KYCAgeCredential(credentialSubjectAge);
const proofRequest = zkKYCPassport(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
