import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameUpdateInput } from "../../../inputs/EnsNameUpdateInput";
import { EnsNameWhereUniqueInput } from "../../../inputs/EnsNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameUpdateInput, {
    nullable: false
  })
  data!: EnsNameUpdateInput;

  @TypeGraphQL.Field(_type => EnsNameWhereUniqueInput, {
    nullable: false
  })
  where!: EnsNameWhereUniqueInput;
}
