import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Attestation } from "../../../models/Attestation";
import { Schema } from "../../../models/Schema";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attestation)
export class AttestationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Schema, {
    nullable: false
  })
  async schema(@TypeGraphQL.Root() attestation: Attestation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Schema> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestation.findUniqueOrThrow({
      where: {
        id: attestation.id,
      },
    }).schema({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
