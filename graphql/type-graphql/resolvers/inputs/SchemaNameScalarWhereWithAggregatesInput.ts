import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SchemaNameScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SchemaNameScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SchemaNameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SchemaNameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SchemaNameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  schemaId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  attesterAddress?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  time?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isCreator?: BoolWithAggregatesFilter | undefined;
}
