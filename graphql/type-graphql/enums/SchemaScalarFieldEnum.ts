import * as TypeGraphQL from "type-graphql";

export enum SchemaScalarFieldEnum {
  id = "id",
  schema = "schema",
  creator = "creator",
  resolver = "resolver",
  revocable = "revocable",
  index = "index",
  txid = "txid",
  time = "time"
}
TypeGraphQL.registerEnumType(SchemaScalarFieldEnum, {
  name: "SchemaScalarFieldEnum",
  description: undefined,
});
