import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OffchainRevocationAvgAggregate } from "../outputs/OffchainRevocationAvgAggregate";
import { OffchainRevocationCountAggregate } from "../outputs/OffchainRevocationCountAggregate";
import { OffchainRevocationMaxAggregate } from "../outputs/OffchainRevocationMaxAggregate";
import { OffchainRevocationMinAggregate } from "../outputs/OffchainRevocationMinAggregate";
import { OffchainRevocationSumAggregate } from "../outputs/OffchainRevocationSumAggregate";

@TypeGraphQL.ObjectType("OffchainRevocationGroupBy", {
  isAbstract: true
})
export class OffchainRevocationGroupBy {
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
  uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  txid!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timestamp!: number;

  @TypeGraphQL.Field(_type => OffchainRevocationCountAggregate, {
    nullable: true
  })
  _count!: OffchainRevocationCountAggregate | null;

  @TypeGraphQL.Field(_type => OffchainRevocationAvgAggregate, {
    nullable: true
  })
  _avg!: OffchainRevocationAvgAggregate | null;

  @TypeGraphQL.Field(_type => OffchainRevocationSumAggregate, {
    nullable: true
  })
  _sum!: OffchainRevocationSumAggregate | null;

  @TypeGraphQL.Field(_type => OffchainRevocationMinAggregate, {
    nullable: true
  })
  _min!: OffchainRevocationMinAggregate | null;

  @TypeGraphQL.Field(_type => OffchainRevocationMaxAggregate, {
    nullable: true
  })
  _max!: OffchainRevocationMaxAggregate | null;
}
