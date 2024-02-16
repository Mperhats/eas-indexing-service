import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameCreateWithoutSchemaInput } from "../inputs/SchemaNameCreateWithoutSchemaInput";
import { SchemaNameWhereUniqueInput } from "../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.InputType("SchemaNameCreateOrConnectWithoutSchemaInput", {
  isAbstract: true
})
export class SchemaNameCreateOrConnectWithoutSchemaInput {
  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaNameWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaNameCreateWithoutSchemaInput, {
    nullable: false
  })
  create!: SchemaNameCreateWithoutSchemaInput;
}
