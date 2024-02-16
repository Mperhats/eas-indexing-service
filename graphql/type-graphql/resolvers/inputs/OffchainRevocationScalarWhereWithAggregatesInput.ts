import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OffchainRevocationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OffchainRevocationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OffchainRevocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OffchainRevocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OffchainRevocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OffchainRevocationScalarWhereWithAggregatesInput[] | undefined;

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
  uid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  txid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  timestamp?: IntWithAggregatesFilter | undefined;
}
