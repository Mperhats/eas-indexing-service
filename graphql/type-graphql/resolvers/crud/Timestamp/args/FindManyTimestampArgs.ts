import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampOrderByWithRelationInput } from "../../../inputs/TimestampOrderByWithRelationInput";
import { TimestampWhereInput } from "../../../inputs/TimestampWhereInput";
import { TimestampWhereUniqueInput } from "../../../inputs/TimestampWhereUniqueInput";
import { TimestampScalarFieldEnum } from "../../../../enums/TimestampScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampWhereInput, {
    nullable: true
  })
  where?: TimestampWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimestampOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TimestampOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TimestampWhereUniqueInput, {
    nullable: true
  })
  cursor?: TimestampWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TimestampScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "from" | "txid" | "tree" | "timestamp"> | undefined;
}
