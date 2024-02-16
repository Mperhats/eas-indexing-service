import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationOrderByWithRelationInput } from "../../../inputs/OffchainRevocationOrderByWithRelationInput";
import { OffchainRevocationWhereInput } from "../../../inputs/OffchainRevocationWhereInput";
import { OffchainRevocationWhereUniqueInput } from "../../../inputs/OffchainRevocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationWhereInput, {
    nullable: true
  })
  where?: OffchainRevocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OffchainRevocationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OffchainRevocationWhereUniqueInput, {
    nullable: true
  })
  cursor?: OffchainRevocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
