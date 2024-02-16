import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TimestampWhereInput", {
  isAbstract: true
})
export class TimestampWhereInput {
  @TypeGraphQL.Field(_type => [TimestampWhereInput], {
    nullable: true
  })
  AND?: TimestampWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimestampWhereInput], {
    nullable: true
  })
  OR?: TimestampWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimestampWhereInput], {
    nullable: true
  })
  NOT?: TimestampWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  from?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  txid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tree?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  timestamp?: IntFilter | undefined;
}
