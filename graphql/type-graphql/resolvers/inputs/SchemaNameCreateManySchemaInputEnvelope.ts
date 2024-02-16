import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchemaNameCreateManySchemaInput } from "../inputs/SchemaNameCreateManySchemaInput";

@TypeGraphQL.InputType("SchemaNameCreateManySchemaInputEnvelope", {
  isAbstract: true
})
export class SchemaNameCreateManySchemaInputEnvelope {
  @TypeGraphQL.Field(_type => [SchemaNameCreateManySchemaInput], {
    nullable: false
  })
  data!: SchemaNameCreateManySchemaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
