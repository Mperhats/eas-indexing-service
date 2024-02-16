import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameCreateInput } from "../../../inputs/SchemaNameCreateInput";
import { SchemaNameUpdateInput } from "../../../inputs/SchemaNameUpdateInput";
import { SchemaNameWhereUniqueInput } from "../../../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaNameWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaNameCreateInput, {
    nullable: false
  })
  create!: SchemaNameCreateInput;

  @TypeGraphQL.Field(_type => SchemaNameUpdateInput, {
    nullable: false
  })
  update!: SchemaNameUpdateInput;
}
