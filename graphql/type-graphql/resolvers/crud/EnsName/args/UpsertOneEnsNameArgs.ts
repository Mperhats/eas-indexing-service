import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameCreateInput } from "../../../inputs/EnsNameCreateInput";
import { EnsNameUpdateInput } from "../../../inputs/EnsNameUpdateInput";
import { EnsNameWhereUniqueInput } from "../../../inputs/EnsNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameWhereUniqueInput, {
    nullable: false
  })
  where!: EnsNameWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnsNameCreateInput, {
    nullable: false
  })
  create!: EnsNameCreateInput;

  @TypeGraphQL.Field(_type => EnsNameUpdateInput, {
    nullable: false
  })
  update!: EnsNameUpdateInput;
}
