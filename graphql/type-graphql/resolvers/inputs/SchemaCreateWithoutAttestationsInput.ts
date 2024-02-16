import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameCreateNestedManyWithoutSchemaInput } from "../inputs/SchemaNameCreateNestedManyWithoutSchemaInput";

@TypeGraphQL.InputType("SchemaCreateWithoutAttestationsInput", {
  isAbstract: true
})
export class SchemaCreateWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schema!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creator!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resolver!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  revocable!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  index!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  txid!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  time!: number;

  @TypeGraphQL.Field(_type => SchemaNameCreateNestedManyWithoutSchemaInput, {
    nullable: true
  })
  schemaNames?: SchemaNameCreateNestedManyWithoutSchemaInput | undefined;
}
