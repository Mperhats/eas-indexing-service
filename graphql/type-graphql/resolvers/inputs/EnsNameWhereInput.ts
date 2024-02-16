import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EnsNameWhereInput", {
  isAbstract: true
})
export class EnsNameWhereInput {
  @TypeGraphQL.Field(_type => [EnsNameWhereInput], {
    nullable: true
  })
  AND?: EnsNameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnsNameWhereInput], {
    nullable: true
  })
  OR?: EnsNameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnsNameWhereInput], {
    nullable: true
  })
  NOT?: EnsNameWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  timestamp?: IntFilter | undefined;
}
