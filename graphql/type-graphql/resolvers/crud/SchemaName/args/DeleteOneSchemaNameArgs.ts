import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameWhereUniqueInput } from "../../../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaNameWhereUniqueInput;
}
