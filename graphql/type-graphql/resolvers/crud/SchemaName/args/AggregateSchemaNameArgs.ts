import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaNameOrderByWithRelationInput } from "../../../inputs/SchemaNameOrderByWithRelationInput";
import { SchemaNameWhereInput } from "../../../inputs/SchemaNameWhereInput";
import { SchemaNameWhereUniqueInput } from "../../../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSchemaNameArgs {
  @TypeGraphQL.Field(_type => SchemaNameWhereInput, {
    nullable: true
  })
  where?: SchemaNameWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SchemaNameOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SchemaNameWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchemaNameWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
