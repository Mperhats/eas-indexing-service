import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaOrderByWithRelationInput } from "../../../inputs/SchemaOrderByWithRelationInput";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";
import { SchemaScalarFieldEnum } from "../../../../enums/SchemaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSchemaArgs {
  @TypeGraphQL.Field(_type => SchemaWhereInput, {
    nullable: true
  })
  where?: SchemaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchemaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SchemaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchemaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SchemaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "schema" | "creator" | "resolver" | "revocable" | "index" | "txid" | "time"> | undefined;
}
