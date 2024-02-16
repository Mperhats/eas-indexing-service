import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameAvgOrderByAggregateInput } from "../inputs/SchemaNameAvgOrderByAggregateInput";
import { SchemaNameCountOrderByAggregateInput } from "../inputs/SchemaNameCountOrderByAggregateInput";
import { SchemaNameMaxOrderByAggregateInput } from "../inputs/SchemaNameMaxOrderByAggregateInput";
import { SchemaNameMinOrderByAggregateInput } from "../inputs/SchemaNameMinOrderByAggregateInput";
import { SchemaNameSumOrderByAggregateInput } from "../inputs/SchemaNameSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchemaNameOrderByWithAggregationInput", {
  isAbstract: true
})
export class SchemaNameOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schemaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attesterAddress?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isCreator?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchemaNameCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SchemaNameCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaNameAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SchemaNameAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaNameMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SchemaNameMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaNameMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SchemaNameMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaNameSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SchemaNameSumOrderByAggregateInput | undefined;
}
