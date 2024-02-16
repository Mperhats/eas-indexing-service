import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEnsNameArgs } from "./args/UpdateOneEnsNameArgs";
import { EnsName } from "../../../models/EnsName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EnsName)
export class UpdateOneEnsNameResolver {
  @TypeGraphQL.Mutation(_returns => EnsName, {
    nullable: true
  })
  async updateOneEnsName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEnsNameArgs): Promise<EnsName | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ensName.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
