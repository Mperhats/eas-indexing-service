import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationOrderByWithAggregationInput } from "../../../inputs/OffchainRevocationOrderByWithAggregationInput";
import { OffchainRevocationScalarWhereWithAggregatesInput } from "../../../inputs/OffchainRevocationScalarWhereWithAggregatesInput";
import { OffchainRevocationWhereInput } from "../../../inputs/OffchainRevocationWhereInput";
import { OffchainRevocationScalarFieldEnum } from "../../../../enums/OffchainRevocationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationWhereInput, {
    nullable: true
  })
  where?: OffchainRevocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OffchainRevocationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "from" | "uid" | "txid" | "timestamp">;

  @TypeGraphQL.Field(_type => OffchainRevocationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OffchainRevocationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
