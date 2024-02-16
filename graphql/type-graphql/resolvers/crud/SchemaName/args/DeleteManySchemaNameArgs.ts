import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameWhereInput } from "../../../inputs/SchemaNameWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  where?: SchemaNameWhereInput | undefined;
}
