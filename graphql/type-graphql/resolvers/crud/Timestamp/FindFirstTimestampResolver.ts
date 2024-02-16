import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTimestampArgs } from "./args/FindFirstTimestampArgs";
import { Timestamp } from "../../../models/Timestamp";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timestamp)
export class FindFirstTimestampResolver {
  @TypeGraphQL.Query(_returns => Timestamp, {
    nullable: true
  })
  async findFirstTimestamp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTimestampArgs): Promise<Timestamp | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timestamp.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
