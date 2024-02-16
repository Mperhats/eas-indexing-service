import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEnsNameArgs } from "./args/AggregateEnsNameArgs";
import { EnsName } from "../../../models/EnsName";
import { AggregateEnsName } from "../../outputs/AggregateEnsName";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EnsName)
export class AggregateEnsNameResolver {
  @TypeGraphQL.Query(_returns => AggregateEnsName, {
    nullable: false
  })
  async aggregateEnsName(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEnsNameArgs): Promise<AggregateEnsName> {
    return getPrismaFromContext(ctx).ensName.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
