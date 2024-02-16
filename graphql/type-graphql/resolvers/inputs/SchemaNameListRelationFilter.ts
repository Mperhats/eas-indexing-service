import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameWhereInput } from "../inputs/SchemaNameWhereInput";

@TypeGraphQL.InputType("SchemaNameListRelationFilter", {
  isAbstract: true
})
export class SchemaNameListRelationFilter {
  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  every?: SchemaNameWhereInput | undefined;

  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  some?: SchemaNameWhereInput | undefined;

  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  none?: SchemaNameWhereInput | undefined;
}
