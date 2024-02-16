import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampCreateInput } from "../../../inputs/TimestampCreateInput";
import { TimestampUpdateInput } from "../../../inputs/TimestampUpdateInput";
import { TimestampWhereUniqueInput } from "../../../inputs/TimestampWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampWhereUniqueInput, {
    nullable: false
  })
  where!: TimestampWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimestampCreateInput, {
    nullable: false
  })
  create!: TimestampCreateInput;

  @TypeGraphQL.Field(_type => TimestampUpdateInput, {
    nullable: false
  })
  update!: TimestampUpdateInput;
}
