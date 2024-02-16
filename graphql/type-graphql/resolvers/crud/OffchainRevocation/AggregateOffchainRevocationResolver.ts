import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOffchainRevocationArgs } from "./args/AggregateOffchainRevocationArgs";
import { OffchainRevocation } from "../../../models/OffchainRevocation";
import { AggregateOffchainRevocation } from "../../outputs/AggregateOffchainRevocation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OffchainRevocation)
export class AggregateOffchainRevocationResolver {
  @TypeGraphQL.Query(_returns => AggregateOffchainRevocation, {
    nullable: false
  })
  async aggregateOffchainRevocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOffchainRevocationArgs): Promise<AggregateOffchainRevocation> {
    return getPrismaFromContext(ctx).offchainRevocation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
