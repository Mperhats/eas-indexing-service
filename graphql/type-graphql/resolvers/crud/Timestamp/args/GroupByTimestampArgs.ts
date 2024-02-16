import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampOrderByWithAggregationInput } from "../../../inputs/TimestampOrderByWithAggregationInput";
import { TimestampScalarWhereWithAggregatesInput } from "../../../inputs/TimestampScalarWhereWithAggregatesInput";
import { TimestampWhereInput } from "../../../inputs/TimestampWhereInput";
import { TimestampScalarFieldEnum } from "../../../../enums/TimestampScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampWhereInput, {
    nullable: true
  })
  where?: TimestampWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimestampOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TimestampOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimestampScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "from" | "txid" | "tree" | "timestamp">;

  @TypeGraphQL.Field(_type => TimestampScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TimestampScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
