import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationAvgAggregate } from "../outputs/AttestationAvgAggregate";
import { AttestationCountAggregate } from "../outputs/AttestationCountAggregate";
import { AttestationMaxAggregate } from "../outputs/AttestationMaxAggregate";
import { AttestationMinAggregate } from "../outputs/AttestationMinAggregate";
import { AttestationSumAggregate } from "../outputs/AttestationSumAggregate";

@TypeGraphQL.ObjectType("AttestationGroupBy", {
  isAbstract: true
})
export class AttestationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  decodedDataJson!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  recipient!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attester!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  time!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timeCreated!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  expirationTime!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  revocationTime!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  refUID!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  revocable!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  revoked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  txid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schemaId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ipfsHash!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isOffchain!: boolean;

  @TypeGraphQL.Field(_type => AttestationCountAggregate, {
    nullable: true
  })
  _count!: AttestationCountAggregate | null;

  @TypeGraphQL.Field(_type => AttestationAvgAggregate, {
    nullable: true
  })
  _avg!: AttestationAvgAggregate | null;

  @TypeGraphQL.Field(_type => AttestationSumAggregate, {
    nullable: true
  })
  _sum!: AttestationSumAggregate | null;

  @TypeGraphQL.Field(_type => AttestationMinAggregate, {
    nullable: true
  })
  _min!: AttestationMinAggregate | null;

  @TypeGraphQL.Field(_type => AttestationMaxAggregate, {
    nullable: true
  })
  _max!: AttestationMaxAggregate | null;
}
