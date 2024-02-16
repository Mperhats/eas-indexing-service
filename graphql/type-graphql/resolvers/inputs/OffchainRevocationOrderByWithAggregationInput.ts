import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OffchainRevocationAvgOrderByAggregateInput } from "../inputs/OffchainRevocationAvgOrderByAggregateInput";
import { OffchainRevocationCountOrderByAggregateInput } from "../inputs/OffchainRevocationCountOrderByAggregateInput";
import { OffchainRevocationMaxOrderByAggregateInput } from "../inputs/OffchainRevocationMaxOrderByAggregateInput";
import { OffchainRevocationMinOrderByAggregateInput } from "../inputs/OffchainRevocationMinOrderByAggregateInput";
import { OffchainRevocationSumOrderByAggregateInput } from "../inputs/OffchainRevocationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OffchainRevocationOrderByWithAggregationInput", {
  isAbstract: true
})
export class OffchainRevocationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  from?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  txid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OffchainRevocationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OffchainRevocationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OffchainRevocationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OffchainRevocationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OffchainRevocationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OffchainRevocationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OffchainRevocationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OffchainRevocationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OffchainRevocationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OffchainRevocationSumOrderByAggregateInput | undefined;
}
