import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateOrConnectWithoutAttestationsInput } from "../inputs/SchemaCreateOrConnectWithoutAttestationsInput";
import { SchemaCreateWithoutAttestationsInput } from "../inputs/SchemaCreateWithoutAttestationsInput";
import { SchemaUpdateWithoutAttestationsInput } from "../inputs/SchemaUpdateWithoutAttestationsInput";
import { SchemaUpsertWithoutAttestationsInput } from "../inputs/SchemaUpsertWithoutAttestationsInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.InputType("SchemaUpdateOneRequiredWithoutAttestationsNestedInput", {
  isAbstract: true
})
export class SchemaUpdateOneRequiredWithoutAttestationsNestedInput {
  @TypeGraphQL.Field(_type => SchemaCreateWithoutAttestationsInput, {
    nullable: true
  })
  create?: SchemaCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => SchemaCreateOrConnectWithoutAttestationsInput, {
    nullable: true
  })
  connectOrCreate?: SchemaCreateOrConnectWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => SchemaUpsertWithoutAttestationsInput, {
    nullable: true
  })
  upsert?: SchemaUpsertWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: true
  })
  connect?: SchemaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SchemaUpdateWithoutAttestationsInput, {
    nullable: true
  })
  update?: SchemaUpdateWithoutAttestationsInput | undefined;
}
