import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchemaOrderByWithRelationInput } from "../../../inputs/SchemaOrderByWithRelationInput";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSchemaArgs {
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
}
