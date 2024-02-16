import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameCreateWithoutSchemaInput } from "../inputs/SchemaNameCreateWithoutSchemaInput";
import { SchemaNameUpdateWithoutSchemaInput } from "../inputs/SchemaNameUpdateWithoutSchemaInput";
import { SchemaNameWhereUniqueInput } from "../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.InputType("SchemaNameUpsertWithWhereUniqueWithoutSchemaInput", {
  isAbstract: true
})
export class SchemaNameUpsertWithWhereUniqueWithoutSchemaInput {
  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaNameWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaNameUpdateWithoutSchemaInput, {
    nullable: false
  })
  update!: SchemaNameUpdateWithoutSchemaInput;

  @TypeGraphQL.Field(_type => SchemaNameCreateWithoutSchemaInput, {
    nullable: false
  })
  create!: SchemaNameCreateWithoutSchemaInput;
}
