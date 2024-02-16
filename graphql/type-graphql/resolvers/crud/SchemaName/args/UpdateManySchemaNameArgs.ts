import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameUpdateManyMutationInput } from "../../../inputs/SchemaNameUpdateManyMutationInput";
import { SchemaNameWhereInput } from "../../../inputs/SchemaNameWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchemaNameUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  where?: SchemaNameWhereInput | undefined;
}
