import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEnsNameOrThrowArgs } from "./args/FindUniqueEnsNameOrThrowArgs";
import { EnsName } from "../../../models/EnsName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EnsName)
export class FindUniqueEnsNameOrThrowResolver {
  @TypeGraphQL.Query(_returns => EnsName, {
    nullable: true
  })
  async getEnsName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEnsNameOrThrowArgs): Promise<EnsName | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ensName.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
