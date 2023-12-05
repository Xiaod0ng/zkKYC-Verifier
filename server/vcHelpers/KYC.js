module.exports = {
  KYC: (credentialSubject) => ({
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "KYC",
      context:
        "https://raw.githubusercontent.com/Xiaod0ng/Schema/main/json-ld/test-Age.json-ld",
      credentialSubject,
    },
  }),
};
