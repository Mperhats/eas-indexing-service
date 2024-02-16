import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameAvgAggregate } from "../outputs/SchemaNameAvgAggregate";
import { SchemaNameCountAggregate } from "../outputs/SchemaNameCountAggregate";
import { SchemaNameMaxAggregate } from "../outputs/SchemaNameMaxAggregate";
import { SchemaNameMinAggregate } from "../outputs/SchemaNameMinAggregate";
import { SchemaNameSumAggregate } from "../outputs/SchemaNameSumAggregate";

@TypeGraphQL.ObjectType("SchemaNameGroupBy", {
  isAbstract: true
})
export class SchemaNameGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schemaId!: string;

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

  @TypeGraphQL.Field(_type => SchemaNameCountAggregate, {
    nullable: true
  })
  _count!: SchemaNameCountAggregate | null;

  @TypeGraphQL.Field(_type => SchemaNameAvgAggregate, {
    nullable: true
  })
  _avg!: SchemaNameAvgAggregate | null;

  @TypeGraphQL.Field(_type => SchemaNameSumAggregate, {
    nullable: true
  })
  _sum!: SchemaNameSumAggregate | null;

  @TypeGraphQL.Field(_type => SchemaNameMinAggregate, {
    nullable: true
  })
  _min!: SchemaNameMinAggregate | null;

  @TypeGraphQL.Field(_type => SchemaNameMaxAggregate, {
    nullable: true
  })
  _max!: SchemaNameMaxAggregate | null;
}
