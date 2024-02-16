import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutSchemaInput } from "../inputs/AttestationCreateWithoutSchemaInput";
import { AttestationUpdateWithoutSchemaInput } from "../inputs/AttestationUpdateWithoutSchemaInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpsertWithWhereUniqueWithoutSchemaInput", {
  isAbstract: true
})
export class AttestationUpsertWithWhereUniqueWithoutSchemaInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutSchemaInput, {
    nullable: false
  })
  update!: AttestationUpdateWithoutSchemaInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutSchemaInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutSchemaInput;
}
