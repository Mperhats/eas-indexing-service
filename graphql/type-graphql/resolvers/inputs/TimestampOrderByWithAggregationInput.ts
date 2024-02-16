import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimestampAvgOrderByAggregateInput } from "../inputs/TimestampAvgOrderByAggregateInput";
import { TimestampCountOrderByAggregateInput } from "../inputs/TimestampCountOrderByAggregateInput";
import { TimestampMaxOrderByAggregateInput } from "../inputs/TimestampMaxOrderByAggregateInput";
import { TimestampMinOrderByAggregateInput } from "../inputs/TimestampMinOrderByAggregateInput";
import { TimestampSumOrderByAggregateInput } from "../inputs/TimestampSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TimestampOrderByWithAggregationInput", {
  isAbstract: true
})
export class TimestampOrderByWithAggregationInput {
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
  txid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tree?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimestampCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TimestampCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimestampAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TimestampAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimestampMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TimestampMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimestampMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TimestampMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimestampSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TimestampSumOrderByAggregateInput | undefined;
}
