import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SchemaMinAggregate", {
  isAbstract: true
})
export class SchemaMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schema!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creator!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolver!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  revocable!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  index!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  txid!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  time!: number | null;
}
