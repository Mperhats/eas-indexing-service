import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnsNameAvgAggregate } from "../outputs/EnsNameAvgAggregate";
import { EnsNameCountAggregate } from "../outputs/EnsNameCountAggregate";
import { EnsNameMaxAggregate } from "../outputs/EnsNameMaxAggregate";
import { EnsNameMinAggregate } from "../outputs/EnsNameMinAggregate";
import { EnsNameSumAggregate } from "../outputs/EnsNameSumAggregate";

@TypeGraphQL.ObjectType("EnsNameGroupBy", {
  isAbstract: true
})
export class EnsNameGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timestamp!: number;

  @TypeGraphQL.Field(_type => EnsNameCountAggregate, {
    nullable: true
  })
  _count!: EnsNameCountAggregate | null;

  @TypeGraphQL.Field(_type => EnsNameAvgAggregate, {
    nullable: true
  })
  _avg!: EnsNameAvgAggregate | null;

  @TypeGraphQL.Field(_type => EnsNameSumAggregate, {
    nullable: true
  })
  _sum!: EnsNameSumAggregate | null;

  @TypeGraphQL.Field(_type => EnsNameMinAggregate, {
    nullable: true
  })
  _min!: EnsNameMinAggregate | null;

  @TypeGraphQL.Field(_type => EnsNameMaxAggregate, {
    nullable: true
  })
  _max!: EnsNameMaxAggregate | null;
}
