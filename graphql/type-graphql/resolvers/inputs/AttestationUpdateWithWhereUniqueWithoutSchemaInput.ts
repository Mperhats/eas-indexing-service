import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationUpdateWithoutSchemaInput } from "../inputs/AttestationUpdateWithoutSchemaInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateWithWhereUniqueWithoutSchemaInput", {
  isAbstract: true
})
export class AttestationUpdateWithWhereUniqueWithoutSchemaInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutSchemaInput, {
    nullable: false
  })
  data!: AttestationUpdateWithoutSchemaInput;
}
