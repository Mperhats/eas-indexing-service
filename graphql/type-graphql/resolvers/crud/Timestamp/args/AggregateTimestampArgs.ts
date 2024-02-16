import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimestampOrderByWithRelationInput } from "../../../inputs/TimestampOrderByWithRelationInput";
import { TimestampWhereInput } from "../../../inputs/TimestampWhereInput";
import { TimestampWhereUniqueInput } from "../../../inputs/TimestampWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTimestampArgs {
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
}
