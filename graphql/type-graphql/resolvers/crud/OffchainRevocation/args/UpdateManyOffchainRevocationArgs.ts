import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationUpdateManyMutationInput } from "../../../inputs/OffchainRevocationUpdateManyMutationInput";
import { OffchainRevocationWhereInput } from "../../../inputs/OffchainRevocationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => OffchainRevocationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OffchainRevocationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OffchainRevocationWhereInput, {
    nullable: true
  })
  where?: OffchainRevocationWhereInput | undefined;
}
