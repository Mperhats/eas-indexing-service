import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTimestampArgs } from "./args/GroupByTimestampArgs";
import { Timestamp } from "../../../models/Timestamp";
import { TimestampGroupBy } from "../../outputs/TimestampGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timestamp)
export class GroupByTimestampResolver {
  @TypeGraphQL.Query(_returns => [TimestampGroupBy], {
    nullable: false
  })
  async groupByTimestamp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTimestampArgs): Promise<TimestampGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timestamp.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
