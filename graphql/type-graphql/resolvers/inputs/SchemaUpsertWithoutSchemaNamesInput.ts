import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateWithoutSchemaNamesInput } from "../inputs/SchemaCreateWithoutSchemaNamesInput";
import { SchemaUpdateWithoutSchemaNamesInput } from "../inputs/SchemaUpdateWithoutSchemaNamesInput";

@TypeGraphQL.InputType("SchemaUpsertWithoutSchemaNamesInput", {
  isAbstract: true
})
export class SchemaUpsertWithoutSchemaNamesInput {
  @TypeGraphQL.Field(_type => SchemaUpdateWithoutSchemaNamesInput, {
    nullable: false
  })
  update!: SchemaUpdateWithoutSchemaNamesInput;

  @TypeGraphQL.Field(_type => SchemaCreateWithoutSchemaNamesInput, {
    nullable: false
  })
  create!: SchemaCreateWithoutSchemaNamesInput;
}
