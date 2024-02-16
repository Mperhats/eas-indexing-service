import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaAvgOrderByAggregateInput } from "../inputs/SchemaAvgOrderByAggregateInput";
import { SchemaCountOrderByAggregateInput } from "../inputs/SchemaCountOrderByAggregateInput";
import { SchemaMaxOrderByAggregateInput } from "../inputs/SchemaMaxOrderByAggregateInput";
import { SchemaMinOrderByAggregateInput } from "../inputs/SchemaMinOrderByAggregateInput";
import { SchemaSumOrderByAggregateInput } from "../inputs/SchemaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchemaOrderByWithAggregationInput", {
  isAbstract: true
})
export class SchemaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schema?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creator?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resolver?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  revocable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  txid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchemaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SchemaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SchemaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SchemaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SchemaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchemaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SchemaSumOrderByAggregateInput | undefined;
}
