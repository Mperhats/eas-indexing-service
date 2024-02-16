import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateWithoutSchemaNamesInput } from "../inputs/SchemaCreateWithoutSchemaNamesInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.InputType("SchemaCreateOrConnectWithoutSchemaNamesInput", {
  isAbstract: true
})
export class SchemaCreateOrConnectWithoutSchemaNamesInput {
  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaCreateWithoutSchemaNamesInput, {
    nullable: false
  })
  create!: SchemaCreateWithoutSchemaNamesInput;
}
