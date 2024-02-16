import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyOffchainRevocationArgs } from "./args/FindManyOffchainRevocationArgs";
import { OffchainRevocation } from "../../../models/OffchainRevocation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OffchainRevocation)
export class FindManyOffchainRevocationResolver {
  @TypeGraphQL.Query(_returns => [OffchainRevocation], {
    nullable: false
  })
  async offchainRevocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOffchainRevocationArgs): Promise<OffchainRevocation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).offchainRevocation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
