import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationCreateInput } from "../../../inputs/OffchainRevocationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationCreateInput, {
    nullable: false
  })
  data!: OffchainRevocationCreateInput;
}
