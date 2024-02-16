import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaCreateInput } from "../../../inputs/SchemaCreateInput";
import { SchemaUpdateInput } from "../../../inputs/SchemaUpdateInput";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSchemaArgs {
  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaCreateInput, {
    nullable: false
  })
  create!: SchemaCreateInput;

  @TypeGraphQL.Field(_type => SchemaUpdateInput, {
    nullable: false
  })
  update!: SchemaUpdateInput;
}
