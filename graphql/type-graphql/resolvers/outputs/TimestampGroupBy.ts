import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimestampAvgAggregate } from "../outputs/TimestampAvgAggregate";
import { TimestampCountAggregate } from "../outputs/TimestampCountAggregate";
import { TimestampMaxAggregate } from "../outputs/TimestampMaxAggregate";
import { TimestampMinAggregate } from "../outputs/TimestampMinAggregate";
import { TimestampSumAggregate } from "../outputs/TimestampSumAggregate";

@TypeGraphQL.ObjectType("TimestampGroupBy", {
  isAbstract: true
})
export class TimestampGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  from!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  txid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tree!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timestamp!: number;

  @TypeGraphQL.Field(_type => TimestampCountAggregate, {
    nullable: true
  })
  _count!: TimestampCountAggregate | null;

  @TypeGraphQL.Field(_type => TimestampAvgAggregate, {
    nullable: true
  })
  _avg!: TimestampAvgAggregate | null;

  @TypeGraphQL.Field(_type => TimestampSumAggregate, {
    nullable: true
  })
  _sum!: TimestampSumAggregate | null;

  @TypeGraphQL.Field(_type => TimestampMinAggregate, {
    nullable: true
  })
  _min!: TimestampMinAggregate | null;

  @TypeGraphQL.Field(_type => TimestampMaxAggregate, {
    nullable: true
  })
  _max!: TimestampMaxAggregate | null;
}
