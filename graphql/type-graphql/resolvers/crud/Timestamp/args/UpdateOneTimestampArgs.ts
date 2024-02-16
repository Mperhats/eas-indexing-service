import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampUpdateInput } from "../../../inputs/TimestampUpdateInput";
import { TimestampWhereUniqueInput } from "../../../inputs/TimestampWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampUpdateInput, {
    nullable: false
  })
  data!: TimestampUpdateInput;

  @TypeGraphQL.Field(_type => TimestampWhereUniqueInput, {
    nullable: false
  })
  where!: TimestampWhereUniqueInput;
}
