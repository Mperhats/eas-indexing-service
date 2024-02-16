import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationWhereUniqueInput } from "../../../inputs/OffchainRevocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationWhereUniqueInput, {
    nullable: false
  })
  where!: OffchainRevocationWhereUniqueInput;
}
