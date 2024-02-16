import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameWhereInput } from "../../../inputs/EnsNameWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEnsNameArgs {
  @TypeGraphQL.Field(_type => EnsNameWhereInput, {
    nullable: true
  })
  where?: EnsNameWhereInput | undefined;
}
