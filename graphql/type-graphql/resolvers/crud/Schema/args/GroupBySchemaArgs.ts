import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaOrderByWithAggregationInput } from "../../../inputs/SchemaOrderByWithAggregationInput";
import { SchemaScalarWhereWithAggregatesInput } from "../../../inputs/SchemaScalarWhereWithAggregatesInput";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";
import { SchemaScalarFieldEnum } from "../../../../enums/SchemaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySchemaArgs {
  @TypeGraphQL.Field(_type => SchemaWhereInput, {
    nullable: true
  })
  where?: SchemaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchemaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SchemaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "schema" | "creator" | "resolver" | "revocable" | "index" | "txid" | "time">;

  @TypeGraphQL.Field(_type => SchemaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SchemaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
