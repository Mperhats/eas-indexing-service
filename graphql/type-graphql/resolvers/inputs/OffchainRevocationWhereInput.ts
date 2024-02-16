import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OffchainRevocationWhereInput", {
  isAbstract: true
})
export class OffchainRevocationWhereInput {
  @TypeGraphQL.Field(_type => [OffchainRevocationWhereInput], {
    nullable: true
  })
  AND?: OffchainRevocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationWhereInput], {
    nullable: true
  })
  OR?: OffchainRevocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OffchainRevocationWhereInput], {
    nullable: true
  })
  NOT?: OffchainRevocationWhereInput[] | undefined;

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
  uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  txid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  timestamp?: IntFilter | undefined;
}
