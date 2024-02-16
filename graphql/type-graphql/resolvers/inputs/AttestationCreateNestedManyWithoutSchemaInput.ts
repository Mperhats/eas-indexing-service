import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManySchemaInputEnvelope } from "../inputs/AttestationCreateManySchemaInputEnvelope";
import { AttestationCreateOrConnectWithoutSchemaInput } from "../inputs/AttestationCreateOrConnectWithoutSchemaInput";
import { AttestationCreateWithoutSchemaInput } from "../inputs/AttestationCreateWithoutSchemaInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateNestedManyWithoutSchemaInput", {
  isAbstract: true
})
export class AttestationCreateNestedManyWithoutSchemaInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutSchemaInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutSchemaInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManySchemaInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManySchemaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;
}
