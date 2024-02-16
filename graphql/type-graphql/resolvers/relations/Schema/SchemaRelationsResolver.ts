import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Attestation } from "../../../models/Attestation";
import { Schema } from "../../../models/Schema";
import { SchemaName } from "../../../models/SchemaName";
import { SchemaAttestationsArgs } from "./args/SchemaAttestationsArgs";
import { SchemaSchemaNamesArgs } from "./args/SchemaSchemaNamesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schema)
export class SchemaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Attestation], {
    nullable: false
  })
  async attestations(@TypeGraphQL.Root() schema: Schema, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SchemaAttestationsArgs): Promise<Attestation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schema.findUniqueOrThrow({
      where: {
        id: schema.id,
      },
    }).attestations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SchemaName], {
    nullable: false
  })
  async schemaNames(@TypeGraphQL.Root() schema: Schema, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SchemaSchemaNamesArgs): Promise<SchemaName[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).schema.findUniqueOrThrow({
      where: {
        id: schema.id,
      },
    }).schemaNames({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
