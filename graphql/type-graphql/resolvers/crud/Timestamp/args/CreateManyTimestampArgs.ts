import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampCreateManyInput } from "../../../inputs/TimestampCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTimestampArgs {
  @TypeGraphQL.Field(_type => [TimestampCreateManyInput], {
    nullable: false
  })
  data!: TimestampCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
