import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameOrderByWithRelationInput } from "../../../inputs/EnsNameOrderByWithRelationInput";
import { EnsNameWhereInput } from "../../../inputs/EnsNameWhereInput";
import { EnsNameWhereUniqueInput } from "../../../inputs/EnsNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameWhereInput, {
    nullable: true
  })
  where?: EnsNameWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EnsNameOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EnsNameOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EnsNameWhereUniqueInput, {
    nullable: true
  })
  cursor?: EnsNameWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
