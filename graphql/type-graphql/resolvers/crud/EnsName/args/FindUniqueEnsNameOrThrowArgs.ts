import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameWhereUniqueInput } from "../../../inputs/EnsNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEnsNameOrThrowArgs {
  @TypeGraphQL.Field(_type => EnsNameWhereUniqueInput, {
    nullable: false
  })
  where!: EnsNameWhereUniqueInput;
}
