import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameUpdateWithoutSchemaInput } from "../inputs/SchemaNameUpdateWithoutSchemaInput";
import { SchemaNameWhereUniqueInput } from "../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.InputType("SchemaNameUpdateWithWhereUniqueWithoutSchemaInput", {
  isAbstract: true
})
export class SchemaNameUpdateWithWhereUniqueWithoutSchemaInput {
  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaNameWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaNameUpdateWithoutSchemaInput, {
    nullable: false
  })
  data!: SchemaNameUpdateWithoutSchemaInput;
}
