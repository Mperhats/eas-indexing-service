import * as TypeGraphQL from "type-graphql";

export enum EnsNameScalarFieldEnum {
  id = "id",
  name = "name",
  timestamp = "timestamp"
}
TypeGraphQL.registerEnumType(EnsNameScalarFieldEnum, {
  name: "EnsNameScalarFieldEnum",
  description: undefined,
});
