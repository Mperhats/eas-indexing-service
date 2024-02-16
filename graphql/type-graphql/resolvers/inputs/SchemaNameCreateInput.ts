import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaCreateNestedOneWithoutSchemaNamesInput } from "../inputs/SchemaCreateNestedOneWithoutSchemaNamesInput";

@TypeGraphQL.InputType("SchemaNameCreateInput", {
  isAbstract: true
})
export class SchemaNameCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attesterAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  time!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCreator!: boolean;

  @TypeGraphQL.Field(_type => SchemaCreateNestedOneWithoutSchemaNamesInput, {
    nullable: false
  })
  schema!: SchemaCreateNestedOneWithoutSchemaNamesInput;
}
