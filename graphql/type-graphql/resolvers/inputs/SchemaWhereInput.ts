import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationListRelationFilter } from "../inputs/AttestationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SchemaNameListRelationFilter } from "../inputs/SchemaNameListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SchemaWhereInput", {
  isAbstract: true
})
export class SchemaWhereInput {
  @TypeGraphQL.Field(_type => [SchemaWhereInput], {
    nullable: true
  })
  AND?: SchemaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaWhereInput], {
    nullable: true
  })
  OR?: SchemaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaWhereInput], {
    nullable: true
  })
  NOT?: SchemaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  schema?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creator?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  resolver?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  revocable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  index?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  txid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  time?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationListRelationFilter, {
    nullable: true
  })
  attestations?: AttestationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SchemaNameListRelationFilter, {
    nullable: true
  })
  schemaNames?: SchemaNameListRelationFilter | undefined;
}
