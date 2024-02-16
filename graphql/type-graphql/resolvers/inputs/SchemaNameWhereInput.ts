import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SchemaRelationFilter } from "../inputs/SchemaRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SchemaNameWhereInput", {
  isAbstract: true
})
export class SchemaNameWhereInput {
  @TypeGraphQL.Field(_type => [SchemaNameWhereInput], {
    nullable: true
  })
  AND?: SchemaNameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereInput], {
    nullable: true
  })
  OR?: SchemaNameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereInput], {
    nullable: true
  })
  NOT?: SchemaNameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  schemaId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  attesterAddress?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  time?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isCreator?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => SchemaRelationFilter, {
    nullable: true
  })
  schema?: SchemaRelationFilter | undefined;
}
