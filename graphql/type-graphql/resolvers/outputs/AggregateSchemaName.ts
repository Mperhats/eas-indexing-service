import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameAvgAggregate } from "../outputs/SchemaNameAvgAggregate";
import { SchemaNameCountAggregate } from "../outputs/SchemaNameCountAggregate";
import { SchemaNameMaxAggregate } from "../outputs/SchemaNameMaxAggregate";
import { SchemaNameMinAggregate } from "../outputs/SchemaNameMinAggregate";
import { SchemaNameSumAggregate } from "../outputs/SchemaNameSumAggregate";

@TypeGraphQL.ObjectType("AggregateSchemaName", {
  isAbstract: true
})
export class AggregateSchemaName {
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
