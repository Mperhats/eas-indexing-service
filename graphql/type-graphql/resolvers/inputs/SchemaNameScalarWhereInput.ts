import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SchemaNameScalarWhereInput", {
  isAbstract: true
})
export class SchemaNameScalarWhereInput {
  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereInput], {
    nullable: true
  })
  AND?: SchemaNameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereInput], {
    nullable: true
  })
  OR?: SchemaNameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereInput], {
    nullable: true
  })
  NOT?: SchemaNameScalarWhereInput[] | undefined;

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
}
