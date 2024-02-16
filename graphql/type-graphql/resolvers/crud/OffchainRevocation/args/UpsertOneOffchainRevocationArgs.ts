import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationCreateInput } from "../../../inputs/OffchainRevocationCreateInput";
import { OffchainRevocationUpdateInput } from "../../../inputs/OffchainRevocationUpdateInput";
import { OffchainRevocationWhereUniqueInput } from "../../../inputs/OffchainRevocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationWhereUniqueInput, {
    nullable: false
  })
  where!: OffchainRevocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OffchainRevocationCreateInput, {
    nullable: false
  })
  create!: OffchainRevocationCreateInput;

  @TypeGraphQL.Field(_type => OffchainRevocationUpdateInput, {
    nullable: false
  })
  update!: OffchainRevocationUpdateInput;
}
