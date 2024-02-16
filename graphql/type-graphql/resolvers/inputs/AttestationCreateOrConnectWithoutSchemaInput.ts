import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutSchemaInput } from "../inputs/AttestationCreateWithoutSchemaInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateOrConnectWithoutSchemaInput", {
  isAbstract: true
})
export class AttestationCreateOrConnectWithoutSchemaInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutSchemaInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutSchemaInput;
}
