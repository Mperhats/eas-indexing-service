import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationWhereInput } from "../../../inputs/OffchainRevocationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationWhereInput, {
    nullable: true
  })
  where?: OffchainRevocationWhereInput | undefined;
}
