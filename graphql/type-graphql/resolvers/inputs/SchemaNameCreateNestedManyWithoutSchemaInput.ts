import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameCreateManySchemaInputEnvelope } from "../inputs/SchemaNameCreateManySchemaInputEnvelope";
import { SchemaNameCreateOrConnectWithoutSchemaInput } from "../inputs/SchemaNameCreateOrConnectWithoutSchemaInput";
import { SchemaNameCreateWithoutSchemaInput } from "../inputs/SchemaNameCreateWithoutSchemaInput";
import { SchemaNameWhereUniqueInput } from "../inputs/SchemaNameWhereUniqueInput";

@TypeGraphQL.InputType("SchemaNameCreateNestedManyWithoutSchemaInput", {
  isAbstract: true
})
export class SchemaNameCreateNestedManyWithoutSchemaInput {
  @TypeGraphQL.Field(_type => [SchemaNameCreateWithoutSchemaInput], {
    nullable: true
  })
  create?: SchemaNameCreateWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameCreateOrConnectWithoutSchemaInput], {
    nullable: true
  })
  connectOrCreate?: SchemaNameCreateOrConnectWithoutSchemaInput[] | undefined;

  @TypeGraphQL.Field(_type => SchemaNameCreateManySchemaInputEnvelope, {
    nullable: true
  })
  createMany?: SchemaNameCreateManySchemaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SchemaNameWhereUniqueInput], {
    nullable: true
  })
  connect?: SchemaNameWhereUniqueInput[] | undefined;
}
