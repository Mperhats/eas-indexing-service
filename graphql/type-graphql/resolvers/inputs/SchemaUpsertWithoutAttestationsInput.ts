import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateWithoutAttestationsInput } from "../inputs/SchemaCreateWithoutAttestationsInput";
import { SchemaUpdateWithoutAttestationsInput } from "../inputs/SchemaUpdateWithoutAttestationsInput";

@TypeGraphQL.InputType("SchemaUpsertWithoutAttestationsInput", {
  isAbstract: true
})
export class SchemaUpsertWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => SchemaUpdateWithoutAttestationsInput, {
    nullable: false
  })
  update!: SchemaUpdateWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => SchemaCreateWithoutAttestationsInput, {
    nullable: false
  })
  create!: SchemaCreateWithoutAttestationsInput;
}
