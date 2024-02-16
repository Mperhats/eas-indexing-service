import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampUpdateManyMutationInput } from "../../../inputs/TimestampUpdateManyMutationInput";
import { TimestampWhereInput } from "../../../inputs/TimestampWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTimestampArgs {
  @TypeGraphQL.Field(_type => TimestampUpdateManyMutationInput, {
    nullable: false
  })
  data!: TimestampUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TimestampWhereInput, {
    nullable: true
  })
  where?: TimestampWhereInput | undefined;
}
