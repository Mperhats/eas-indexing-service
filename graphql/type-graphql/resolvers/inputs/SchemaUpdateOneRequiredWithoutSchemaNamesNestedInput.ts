import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateOrConnectWithoutSchemaNamesInput } from "../inputs/SchemaCreateOrConnectWithoutSchemaNamesInput";
import { SchemaCreateWithoutSchemaNamesInput } from "../inputs/SchemaCreateWithoutSchemaNamesInput";
import { SchemaUpdateWithoutSchemaNamesInput } from "../inputs/SchemaUpdateWithoutSchemaNamesInput";
import { SchemaUpsertWithoutSchemaNamesInput } from "../inputs/SchemaUpsertWithoutSchemaNamesInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";

@TypeGraphQL.InputType("SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput", {
  isAbstract: true
})
export class SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput {
  @TypeGraphQL.Field(_type => SchemaCreateWithoutSchemaNamesInput, {
    nullable: true
  })
  create?: SchemaCreateWithoutSchemaNamesInput | undefined;

  @TypeGraphQL.Field(_type => SchemaCreateOrConnectWithoutSchemaNamesInput, {
    nullable: true
  })
  connectOrCreate?: SchemaCreateOrConnectWithoutSchemaNamesInput | undefined;

  @TypeGraphQL.Field(_type => SchemaUpsertWithoutSchemaNamesInput, {
    nullable: true
  })
  upsert?: SchemaUpsertWithoutSchemaNamesInput | undefined;

  @TypeGraphQL.Field(_type => SchemaWhereUniqueInput, {
    nullable: true
  })
  connect?: SchemaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SchemaUpdateWithoutSchemaNamesInput, {
    nullable: true
  })
  update?: SchemaUpdateWithoutSchemaNamesInput | undefined;
}
