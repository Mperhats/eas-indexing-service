import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByOffchainRevocationArgs } from "./args/GroupByOffchainRevocationArgs";
import { OffchainRevocation } from "../../../models/OffchainRevocation";
import { OffchainRevocationGroupBy } from "../../outputs/OffchainRevocationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OffchainRevocation)
export class GroupByOffchainRevocationResolver {
  @TypeGraphQL.Query(_returns => [OffchainRevocationGroupBy], {
    nullable: false
  })
  async groupByOffchainRevocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOffchainRevocationArgs): Promise<OffchainRevocationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).offchainRevocation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
