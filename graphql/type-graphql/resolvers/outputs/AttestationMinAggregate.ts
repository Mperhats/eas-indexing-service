import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AttestationMinAggregate", {
  isAbstract: true
})
export class AttestationMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  data!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  decodedDataJson!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recipient!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attester!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  time!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  timeCreated!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expirationTime!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  revocationTime!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refUID!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  revocable!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  revoked!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  txid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schemaId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ipfsHash!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isOffchain!: boolean | null;
}
