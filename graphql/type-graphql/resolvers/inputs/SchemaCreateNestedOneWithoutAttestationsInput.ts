import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateOrConnectWithoutAttestationsInput } from "../inputs/SchemaCreateOrConnectWithoutAttestationsInput";
import { SchemaCreateWithoutAttestationsInput } from "../inputs/SchemaCreateWithoutAttestationsInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.InputType("SchemaCreateNestedOneWithoutAttestationsInput", {
  isAbstract: true
})
export class SchemaCreateNestedOneWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => SchemaCreateWithoutAttestationsInput, {
    nullable: true
  })
  create?: SchemaCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => SchemaCreateOrConnectWithoutAttestationsInput, {
    nullable: true
  })
  connectOrCreate?: SchemaCreateOrConnectWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: true
  })
  connect?: SchemaWhereUniqueInput | undefined;
}
