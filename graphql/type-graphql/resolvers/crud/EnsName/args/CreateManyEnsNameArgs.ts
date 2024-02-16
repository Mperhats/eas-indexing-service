import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnsNameCreateManyInput } from "../../../inputs/EnsNameCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEnsNameArgs {
  @TypeGraphQL.Field(_type => [EnsNameCreateManyInput], {
    nullable: false
  })
  data!: EnsNameCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
