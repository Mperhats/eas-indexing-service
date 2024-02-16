import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OffchainRevocationCreateManyInput } from "../../../inputs/OffchainRevocationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOffchainRevocationArgs {
  @TypeGraphQL.Field(_type => [OffchainRevocationCreateManyInput], {
    nullable: false
  })
  data!: OffchainRevocationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
