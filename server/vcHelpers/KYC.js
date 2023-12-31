const KYC = () => ({
  id: 1,
  circuitId: "credentialAtomicQuerySigV2",
  query: {
    allowedIssuers: ["*"],
    type: "KYC",
    context:
      "https://raw.githubusercontent.com/Xiaod0ng/Schema/main/json-ld/ZKKYCID.json-ld",
    credentialSubject: {
      Sex: {
        $eq: "Female",
      },
    },
  },
});

module.exports = { KYC };
