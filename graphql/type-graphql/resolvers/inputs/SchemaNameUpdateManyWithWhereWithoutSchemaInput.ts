import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameScalarWhereInput } from "../inputs/SchemaNameScalarWhereInput";
import { SchemaNameUpdateManyMutationInput } from "../inputs/SchemaNameUpdateManyMutationInput";

@TypeGraphQL.InputType("SchemaNameUpdateManyWithWhereWithoutSchemaInput", {
  isAbstract: true
})
export class SchemaNameUpdateManyWithWhereWithoutSchemaInput {
  @TypeGraphQL.Field(_type => SchemaNameScalarWhereInput, {
    nullable: false
  })
  where!: SchemaNameScalarWhereInput;

  @TypeGraphQL.Field(_type => SchemaNameUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchemaNameUpdateManyMutationInput;
}
