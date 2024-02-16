import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameUpdateManyMutationInput } from "../../../inputs/EnsNameUpdateManyMutationInput";
import { EnsNameWhereInput } from "../../../inputs/EnsNameWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameUpdateManyMutationInput, {
    nullable: false
  })
  data!: EnsNameUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EnsNameWhereInput, {
    nullable: true
  })
  where?: EnsNameWhereInput | undefined;
}
