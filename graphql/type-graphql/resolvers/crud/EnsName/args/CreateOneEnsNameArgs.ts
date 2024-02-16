import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameCreateInput } from "../../../inputs/EnsNameCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameCreateInput, {
    nullable: false
  })
  data!: EnsNameCreateInput;
}
