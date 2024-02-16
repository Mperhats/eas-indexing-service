import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateWithoutAttestationsInput } from "../inputs/SchemaCreateWithoutAttestationsInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.InputType("SchemaCreateOrConnectWithoutAttestationsInput", {
  isAbstract: true
})
export class SchemaCreateOrConnectWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: false
  })
  where!: SchemaWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchemaCreateWithoutAttestationsInput, {
    nullable: false
  })
  create!: SchemaCreateWithoutAttestationsInput;
}
