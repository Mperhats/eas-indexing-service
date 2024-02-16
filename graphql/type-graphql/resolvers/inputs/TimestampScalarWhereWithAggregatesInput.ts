import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TimestampScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TimestampScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TimestampScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TimestampScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimestampScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TimestampScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimestampScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TimestampScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  from?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  txid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tree?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  timestamp?: IntWithAggregatesFilter | undefined;
}
