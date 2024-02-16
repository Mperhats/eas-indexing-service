import * as TypeGraphQL from "type-graphql";

export enum TimestampScalarFieldEnum {
  id = "id",
  from = "from",
  txid = "txid",
  tree = "tree",
  timestamp = "timestamp"
}
TypeGraphQL.registerEnumType(TimestampScalarFieldEnum, {
  name: "TimestampScalarFieldEnum",
  description: undefined,
});
