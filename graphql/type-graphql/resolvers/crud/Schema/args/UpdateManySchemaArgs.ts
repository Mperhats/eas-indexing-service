import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaUpdateManyMutationInput } from "../../../inputs/SchemaUpdateManyMutationInput";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySchemaArgs {
  @TypeGraphQL.Field(_type => SchemaUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchemaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SchemaWhereInput, {
    nullable: true
  })
  where?: SchemaWhereInput | undefined;
}
