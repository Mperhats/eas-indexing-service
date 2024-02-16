import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampWhereUniqueInput } from "../../../inputs/TimestampWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampWhereUniqueInput, {
    nullable: false
  })
  where!: TimestampWhereUniqueInput;
}
