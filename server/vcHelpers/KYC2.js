const KYC2 = () => ({
  id: 2,
  circuitId: "credentialAtomicQuerySigV2",
  query: {
    allowedIssuers: ["*"],
    type: "KYC",
    context:
      "https://raw.githubusercontent.com/Xiaod0ng/Schema/main/json-ld/ZKKYCID.json-ld",
    credentialSubject: {
      Birthday: {
        $lt: 20230101,
      },
    },
  },
});

module.exports = { KYC2 };
