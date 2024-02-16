import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOffchainRevocationArgs } from "./args/FindFirstOffchainRevocationArgs";
import { OffchainRevocation } from "../../../models/OffchainRevocation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OffchainRevocation)
export class FindFirstOffchainRevocationResolver {
  @TypeGraphQL.Query(_returns => OffchainRevocation, {
    nullable: true
  })
  async findFirstOffchainRevocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOffchainRevocationArgs): Promise<OffchainRevocation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).offchainRevocation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
