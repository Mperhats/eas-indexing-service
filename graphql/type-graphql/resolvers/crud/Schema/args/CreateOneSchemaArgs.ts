import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaCreateInput } from "../../../inputs/SchemaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSchemaArgs {
  @TypeGraphQL.Field(_type => SchemaCreateInput, {
    nullable: false
  })
  data!: SchemaCreateInput;
}
