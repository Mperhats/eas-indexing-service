import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTimestampOrThrowArgs } from "./args/FindFirstTimestampOrThrowArgs";
import { Timestamp } from "../../../models/Timestamp";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timestamp)
export class FindFirstTimestampOrThrowResolver {
  @TypeGraphQL.Query(_returns => Timestamp, {
    nullable: true
  })
  async findFirstTimestampOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTimestampOrThrowArgs): Promise<Timestamp | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timestamp.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
