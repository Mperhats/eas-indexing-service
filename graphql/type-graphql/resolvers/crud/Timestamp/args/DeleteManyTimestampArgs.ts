import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampWhereInput } from "../../../inputs/TimestampWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampWhereInput, {
    nullable: true
  })
  where?: TimestampWhereInput | undefined;
}
