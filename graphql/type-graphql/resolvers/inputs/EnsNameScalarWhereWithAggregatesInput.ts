import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EnsNameScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EnsNameScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EnsNameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EnsNameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnsNameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EnsNameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnsNameScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EnsNameScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  timestamp?: IntWithAggregatesFilter | undefined;
}
