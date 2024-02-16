import * as TypeGraphQL from "type-graphql";

export enum SchemaNameScalarFieldEnum {
  id = "id",
  schemaId = "schemaId",
  attesterAddress = "attesterAddress",
  name = "name",
  time = "time",
  isCreator = "isCreator"
}
TypeGraphQL.registerEnumType(SchemaNameScalarFieldEnum, {
  name: "SchemaNameScalarFieldEnum",
  description: undefined,
});
