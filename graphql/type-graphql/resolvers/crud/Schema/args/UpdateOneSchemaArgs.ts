import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaUpdateInput } from "../../../inputs/SchemaUpdateInput";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSchemaArgs {
  @TypeGraphQL.Field(_type => SchemaUpdateInput, {
    nullable: false
  })
  data!: SchemaUpdateInput;

  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaWhereUniqueInput;
}
