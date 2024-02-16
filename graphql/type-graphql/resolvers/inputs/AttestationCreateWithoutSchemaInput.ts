import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AttestationCreateWithoutSchemaInput", {
  isAbstract: true
})
export class AttestationCreateWithoutSchemaInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  decodedDataJson?: string | undefined;

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
  ipfsHash!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isOffchain!: boolean;
}
