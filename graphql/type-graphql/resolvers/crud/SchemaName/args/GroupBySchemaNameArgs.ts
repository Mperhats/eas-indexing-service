import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameOrderByWithAggregationInput } from "../../../inputs/SchemaNameOrderByWithAggregationInput";
import { SchemaNameScalarWhereWithAggregatesInput } from "../../../inputs/SchemaNameScalarWhereWithAggregatesInput";
import { SchemaNameWhereInput } from "../../../inputs/SchemaNameWhereInput";
import { SchemaNameScalarFieldEnum } from "../../../../enums/SchemaNameScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  where?: SchemaNameWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SchemaNameOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "schemaId" | "attesterAddress" | "name" | "time" | "isCreator">;

  @TypeGraphQL.Field(_type => SchemaNameScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SchemaNameScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
