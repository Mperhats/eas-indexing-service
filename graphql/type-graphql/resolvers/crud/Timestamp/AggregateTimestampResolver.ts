import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTimestampArgs } from "./args/AggregateTimestampArgs";
import { Timestamp } from "../../../models/Timestamp";
import { AggregateTimestamp } from "../../outputs/AggregateTimestamp";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timestamp)
export class AggregateTimestampResolver {
  @TypeGraphQL.Query(_returns => AggregateTimestamp, {
    nullable: false
  })
  async aggregateTimestamp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTimestampArgs): Promise<AggregateTimestamp> {
    return getPrismaFromContext(ctx).timestamp.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
