import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameCreateManyInput } from "../../../inputs/SchemaNameCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySchemaNameArgs {
  @TypeGraphQL.Field(_type => [SchemaNameCreateManyInput], {
    nullable: false
  })
  data!: SchemaNameCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
