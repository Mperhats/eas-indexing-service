import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SchemaNameMaxAggregate", {
  isAbstract: true
})
export class SchemaNameMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schemaId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attesterAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  time!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCreator!: boolean | null;
}
