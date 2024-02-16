import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SchemaScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SchemaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SchemaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SchemaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SchemaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SchemaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  schema?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  creator?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  resolver?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  revocable?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  index?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  txid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  time?: IntWithAggregatesFilter | undefined;
}
