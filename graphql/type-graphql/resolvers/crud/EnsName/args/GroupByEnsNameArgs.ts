import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameOrderByWithAggregationInput } from "../../../inputs/EnsNameOrderByWithAggregationInput";
import { EnsNameScalarWhereWithAggregatesInput } from "../../../inputs/EnsNameScalarWhereWithAggregatesInput";
import { EnsNameWhereInput } from "../../../inputs/EnsNameWhereInput";
import { EnsNameScalarFieldEnum } from "../../../../enums/EnsNameScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameWhereInput, {
    nullable: true
  })
  where?: EnsNameWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EnsNameOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EnsNameOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnsNameScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "timestamp">;

  @TypeGraphQL.Field(_type => EnsNameScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EnsNameScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
