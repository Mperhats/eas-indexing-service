import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManySchemaInputEnvelope } from "../inputs/AttestationCreateManySchemaInputEnvelope";
import { AttestationCreateOrConnectWithoutSchemaInput } from "../inputs/AttestationCreateOrConnectWithoutSchemaInput";
import { AttestationCreateWithoutSchemaInput } from "../inputs/AttestationCreateWithoutSchemaInput";
import { AttestationScalarWhereInput } from "../inputs/AttestationScalarWhereInput";
import { AttestationUpdateManyWithWhereWithoutSchemaInput } from "../inputs/AttestationUpdateManyWithWhereWithoutSchemaInput";
import { AttestationUpdateWithWhereUniqueWithoutSchemaInput } from "../inputs/AttestationUpdateWithWhereUniqueWithoutSchemaInput";
import { AttestationUpsertWithWhereUniqueWithoutSchemaInput } from "../inputs/AttestationUpsertWithWhereUniqueWithoutSchemaInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateManyWithoutSchemaNestedInput", {
  isAbstract: true
})
export class AttestationUpdateManyWithoutSchemaNestedInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutSchemaInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutSchemaInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpsertWithWhereUniqueWithoutSchemaInput], {
    nullable: true
  })
  upsert?: AttestationUpsertWithWhereUniqueWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManySchemaInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManySchemaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  set?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  delete?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateWithWhereUniqueWithoutSchemaInput], {
    nullable: true
  })
  update?: AttestationUpdateWithWhereUniqueWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateManyWithWhereWithoutSchemaInput], {
    nullable: true
  })
  updateMany?: AttestationUpdateManyWithWhereWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttestationScalarWhereInput[] | undefined;
}
