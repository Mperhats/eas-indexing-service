import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManySchemaInput } from "../inputs/AttestationCreateManySchemaInput";

@TypeGraphQL.InputType("AttestationCreateManySchemaInputEnvelope", {
  isAbstract: true
})
export class AttestationCreateManySchemaInputEnvelope {
  @TypeGraphQL.Field(_type => [AttestationCreateManySchemaInput], {
    nullable: false
  })
  data!: AttestationCreateManySchemaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
