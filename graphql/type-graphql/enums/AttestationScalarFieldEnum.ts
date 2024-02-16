import * as TypeGraphQL from "type-graphql";

export enum AttestationScalarFieldEnum {
  id = "id",
  data = "data",
  decodedDataJson = "decodedDataJson",
  recipient = "recipient",
  attester = "attester",
  time = "time",
  timeCreated = "timeCreated",
  expirationTime = "expirationTime",
  revocationTime = "revocationTime",
  refUID = "refUID",
  revocable = "revocable",
  revoked = "revoked",
  txid = "txid",
  schemaId = "schemaId",
  ipfsHash = "ipfsHash",
  isOffchain = "isOffchain"
}
TypeGraphQL.registerEnumType(AttestationScalarFieldEnum, {
  name: "AttestationScalarFieldEnum",
  description: undefined,
});
