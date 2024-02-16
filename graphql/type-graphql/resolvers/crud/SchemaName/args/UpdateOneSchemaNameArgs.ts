import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameUpdateInput } from "../../../inputs/SchemaNameUpdateInput";
import { SchemaNameWhereUniqueInput } from "../../../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameUpdateInput, {
    nullable: false
  })
  data!: SchemaNameUpdateInput;

  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaNameWhereUniqueInput;
}
