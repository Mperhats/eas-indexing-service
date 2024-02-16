import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampCreateInput } from "../../../inputs/TimestampCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampCreateInput, {
    nullable: false
  })
  data!: TimestampCreateInput;
}
