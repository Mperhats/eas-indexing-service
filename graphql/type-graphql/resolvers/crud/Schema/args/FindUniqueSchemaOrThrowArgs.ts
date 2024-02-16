import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSchemaOrThrowArgs {
  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaWhereUniqueInput;
}
