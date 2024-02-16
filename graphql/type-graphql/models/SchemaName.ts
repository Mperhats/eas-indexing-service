import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Schema } from "../models/Schema";

@TypeGraphQL.ObjectType("SchemaName", {
  isAbstract: true
})
export class SchemaName {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schemaId!: string;

  schema?: Schema;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attesterAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  time!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCreator!: boolean;
}
