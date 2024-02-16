import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaCreateManyInput } from "../../../inputs/SchemaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySchemaArgs {
  @TypeGraphQL.Field(_type => [SchemaCreateManyInput], {
    nullable: false
  })
  data!: SchemaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
