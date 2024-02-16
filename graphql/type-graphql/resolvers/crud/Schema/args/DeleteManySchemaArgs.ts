import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySchemaArgs {
  @TypeGraphQL.Field(_type => SchemaWhereInput, {
    nullable: true
  })
  where?: SchemaWhereInput | undefined;
}
