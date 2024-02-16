import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateOrConnectWithoutSchemaNamesInput } from "../inputs/SchemaCreateOrConnectWithoutSchemaNamesInput";
import { SchemaCreateWithoutSchemaNamesInput } from "../inputs/SchemaCreateWithoutSchemaNamesInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.InputType("SchemaCreateNestedOneWithoutSchemaNamesInput", {
  isAbstract: true
})
export class SchemaCreateNestedOneWithoutSchemaNamesInput {
  @TypeGraphQL.Field(_type => SchemaCreateWithoutSchemaNamesInput, {
    nullable: true
  })
  create?: SchemaCreateWithoutSchemaNamesInput | undefined;

  @TypeGraphQL.Field(_type => SchemaCreateOrConnectWithoutSchemaNamesInput, {
    nullable: true
  })
  connectOrCreate?: SchemaCreateOrConnectWithoutSchemaNamesInput | undefined;

  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: true
  })
  connect?: SchemaWhereUniqueInput | undefined;
}
