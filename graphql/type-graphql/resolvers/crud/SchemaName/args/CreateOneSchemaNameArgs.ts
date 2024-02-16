import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameCreateInput } from "../../../inputs/SchemaNameCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameCreateInput, {
    nullable: false
  })
  data!: SchemaNameCreateInput;
}
