import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attestation } from "../models/Attestation";
import { SchemaName } from "../models/SchemaName";
import { SchemaCount } from "../resolvers/outputs/SchemaCount";

@TypeGraphQL.ObjectType("Schema", {
  isAbstract: true
})
export class Schema {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schema!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creator!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resolver!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  revocable!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  index!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  txid!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  time!: number;

  attestations?: Attestation[];

  schemaNames?: SchemaName[];

  @TypeGraphQL.Field(_type => SchemaCount, {
    nullable: true
  })
  _count?: SchemaCount | null;
}
