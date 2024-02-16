import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaAvgAggregate } from "../outputs/SchemaAvgAggregate";
import { SchemaCountAggregate } from "../outputs/SchemaCountAggregate";
import { SchemaMaxAggregate } from "../outputs/SchemaMaxAggregate";
import { SchemaMinAggregate } from "../outputs/SchemaMinAggregate";
import { SchemaSumAggregate } from "../outputs/SchemaSumAggregate";

@TypeGraphQL.ObjectType("AggregateSchema", {
  isAbstract: true
})
export class AggregateSchema {
  @TypeGraphQL.Field(_type => SchemaCountAggregate, {
    nullable: true
  })
  _count!: SchemaCountAggregate | null;

  @TypeGraphQL.Field(_type => SchemaAvgAggregate, {
    nullable: true
  })
  _avg!: SchemaAvgAggregate | null;

  @TypeGraphQL.Field(_type => SchemaSumAggregate, {
    nullable: true
  })
  _sum!: SchemaSumAggregate | null;

  @TypeGraphQL.Field(_type => SchemaMinAggregate, {
    nullable: true
  })
  _min!: SchemaMinAggregate | null;

  @TypeGraphQL.Field(_type => SchemaMaxAggregate, {
    nullable: true
  })
  _max!: SchemaMaxAggregate | null;
}
