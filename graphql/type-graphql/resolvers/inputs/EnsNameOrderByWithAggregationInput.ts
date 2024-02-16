import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnsNameAvgOrderByAggregateInput } from "../inputs/EnsNameAvgOrderByAggregateInput";
import { EnsNameCountOrderByAggregateInput } from "../inputs/EnsNameCountOrderByAggregateInput";
import { EnsNameMaxOrderByAggregateInput } from "../inputs/EnsNameMaxOrderByAggregateInput";
import { EnsNameMinOrderByAggregateInput } from "../inputs/EnsNameMinOrderByAggregateInput";
import { EnsNameSumOrderByAggregateInput } from "../inputs/EnsNameSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EnsNameOrderByWithAggregationInput", {
  isAbstract: true
})
export class EnsNameOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EnsNameCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EnsNameCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnsNameAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EnsNameAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnsNameMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EnsNameMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnsNameMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EnsNameMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnsNameSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EnsNameSumOrderByAggregateInput | undefined;
}
