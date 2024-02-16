import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameCreateManySchemaInputEnvelope } from "../inputs/SchemaNameCreateManySchemaInputEnvelope";
import { SchemaNameCreateOrConnectWithoutSchemaInput } from "../inputs/SchemaNameCreateOrConnectWithoutSchemaInput";
import { SchemaNameCreateWithoutSchemaInput } from "../inputs/SchemaNameCreateWithoutSchemaInput";
import { SchemaNameScalarWhereInput } from "../inputs/SchemaNameScalarWhereInput";
import { SchemaNameUpdateManyWithWhereWithoutSchemaInput } from "../inputs/SchemaNameUpdateManyWithWhereWithoutSchemaInput";
import { SchemaNameUpdateWithWhereUniqueWithoutSchemaInput } from "../inputs/SchemaNameUpdateWithWhereUniqueWithoutSchemaInput";
import { SchemaNameUpsertWithWhereUniqueWithoutSchemaInput } from "../inputs/SchemaNameUpsertWithWhereUniqueWithoutSchemaInput";
import { SchemaNameWhereUniqueInput } from "../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.InputType("SchemaNameUpdateManyWithoutSchemaNestedInput", {
  isAbstract: true
})
export class SchemaNameUpdateManyWithoutSchemaNestedInput {
  @TypeGraphQL.Field(_type => [SchemaNameCreateWithoutSchemaInput], {
    nullable: true
  })
  create?: SchemaNameCreateWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameCreateOrConnectWithoutSchemaInput], {
    nullable: true
  })
  connectOrCreate?: SchemaNameCreateOrConnectWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameUpsertWithWhereUniqueWithoutSchemaInput], {
    nullable: true
  })
  upsert?: SchemaNameUpsertWithWhereUniqueWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => SchemaNameCreateManySchemaInputEnvelope, {
    nullable: true
  })
  createMany?: SchemaNameCreateManySchemaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereUniqueInput], {
    nullable: true
  })
  set?: SchemaNameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SchemaNameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereUniqueInput], {
    nullable: true
  })
  delete?: SchemaNameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereUniqueInput], {
    nullable: true
  })
  connect?: SchemaNameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameUpdateWithWhereUniqueWithoutSchemaInput], {
    nullable: true
  })
  update?: SchemaNameUpdateWithWhereUniqueWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameUpdateManyWithWhereWithoutSchemaInput], {
    nullable: true
  })
  updateMany?: SchemaNameUpdateManyWithWhereWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SchemaNameScalarWhereInput[] | undefined;
}
