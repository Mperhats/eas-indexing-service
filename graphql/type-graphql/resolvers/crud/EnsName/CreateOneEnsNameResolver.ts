import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEnsNameArgs } from "./args/CreateOneEnsNameArgs";
import { EnsName } from "../../../models/EnsName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EnsName)
export class CreateOneEnsNameResolver {
  @TypeGraphQL.Mutation(_returns => EnsName, {
    nullable: false
  })
  async createOneEnsName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEnsNameArgs): Promise<EnsName> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ensName.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
