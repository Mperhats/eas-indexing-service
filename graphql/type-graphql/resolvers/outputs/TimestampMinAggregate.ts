import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TimestampMinAggregate", {
  isAbstract: true
})
export class TimestampMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  from!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  txid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tree!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  timestamp!: number | null;
}
