import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationUpdateInput } from "../../../inputs/OffchainRevocationUpdateInput";
import { OffchainRevocationWhereUniqueInput } from "../../../inputs/OffchainRevocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationUpdateInput, {
    nullable: false
  })
  data!: OffchainRevocationUpdateInput;

  @TypeGraphQL.Field(_type => OffchainRevocationWhereUniqueInput, {
    nullable: false
  })
  where!: OffchainRevocationWhereUniqueInput;
}
