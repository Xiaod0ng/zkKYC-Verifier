module.exports = {
  zkKYCPassport: (credentialSubject) => ({
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "ZKKYC",
      context:
        "https://raw.githubusercontent.com/Xiaod0ng/Schema/main/json-ld/zkKYCPassport.json-ld",
      credentialSubject: {
        Sex: {
          $eq: "Female",
        },
      },
    },
  }),
};
