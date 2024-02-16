import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaWhereInput } from "../inputs/SchemaWhereInput";

@TypeGraphQL.InputType("SchemaRelationFilter", {
  isAbstract: true
})
export class SchemaRelationFilter {
  @TypeGraphQL.Field(_type => SchemaWhereInput, {
    nullable: true
  })
  is?: SchemaWhereInput | undefined;

  @TypeGraphQL.Field(_type => SchemaWhereInput, {
    nullable: true
  })
  isNot?: SchemaWhereInput | undefined;
}
